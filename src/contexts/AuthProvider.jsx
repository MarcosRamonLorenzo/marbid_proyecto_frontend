import React, { createContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {
  doCreateUserWithEmailAndPassword,
  doSignInWithEmailAndPassword,
  getUser,
  createUser,
} from "@/functions/authFunc";

const authContext = createContext();

const AuthProvider = ({ children }) => {
  const userDefaultValue = null;
  const loginDefaultValue = false;

  const [currentUser, setCurrentUser] = useState(userDefaultValue);
  const [isLogin, setIsLogin] = useState(loginDefaultValue);
  const [loading, setLoading] = useState(true);

  const formObject = {
    email: "",
    password: "",
  };

  const [formUser, setFormUser] = useState(formObject);

  const navigate = useNavigate();

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormUser({ ...formUser, [name]: value });
  };

  const handleSubmitUser = async (e, action) => {
    e.preventDefault();
    try {
      if (action === "login") {
        await doSignInWithEmailAndPassword(formUser.email, formUser.password);
      } else {
        await doCreateUserWithEmailAndPassword(
          formUser.email,
          formUser.password
        );
      }
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleAuthConnectionUser = async (user) => {
    const userDB = await getUser(user.uid);

    if (!userDB) {
      createUser({
        id: user.uid,
        email: user.email,
      });
      setCurrentUser(user); // Si no hay datos en la base de datos, solo almacenamos los datos de Firebase
    } else {
      setCurrentUser({ ...user, userDB }); // Si hay datos en la base de datos, anidamos los datos de Firebase y de la base de datos
    }
    navigate("/");
  };

  /* User State Controller*/
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  const initializeUser = async (user) => {
    setLoading(true);
    if (user) {
      setLoading(false);
      setCurrentUser(user);
      setIsLogin(true);
      handleAuthConnectionUser(user);
    } else {
      setCurrentUser(userDefaultValue);
      setIsLogin(loginDefaultValue);
    }
    setLoading(false);
  };

  const provideValues = {
    currentUser,
    isLogin,
    loading,
    handleFormChange,
    handleSubmitUser,
  };

  return (
    <authContext.Provider value={provideValues}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
export { authContext };
