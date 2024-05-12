import React, { createContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  doCreateUserWithEmailAndPassword,
  doSignInWithEmailAndPassword,
  getUserDB,
  createUser,
} from "@/functions/authFunc";
import LoadingMarbidLoad from "@/components/shared-componentes/Loadings/LoadingMarbidLoad";

const authContext = createContext();

const AuthProvider = ({ children }) => {


  const nullDefaultValue = null;
  const stringDefaultValue = "";
  const loginDefaultValue = false;

  const [currentUser, setCurrentUser] = useState(nullDefaultValue);
  const [isLogin, setIsLogin] = useState(loginDefaultValue);
  const [loading, setLoading] = useState(true);
  const [errorAuth, setErrorAuth] = useState(stringDefaultValue);

  const formObject = {
    email: "",
    password: "",
  };

  const [formUser, setFormUser] = useState(formObject);


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
        if (formUser.password === formUser.repeatPassword) {
          await doCreateUserWithEmailAndPassword(
            formUser.email,
            formUser.password
          );
        } else {
          setErrorAuth("Las contraseñas no son iguales");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAuthConnectionUser = async (user) => {
    const userDB = await getUserDB(user.uid);

    if (!userDB) {
      const newUserDB = await createUser({
        id: user.uid,
        email: user.email,
        name: user?.displayName || null,
        avatar_img: user?.photoURL || null,
        
      });
      setCurrentUser(user, newUserDB);
    } else {
      setCurrentUser({ ...user, userDB });
    }
    //navigate("/"); fix/make redirect to home only in login or register
  };
  
  const reloadUserDB =  (user) => {
    if (user.id === currentUser.uid) {
      setCurrentUser({ ...currentUser, userDB: user });
      console.log(currentUser);
    }
  };

  /* User State Controller*/
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  const initializeUser = async (user) => {
    setLoading(true);
    <LoadingMarbidLoad />
    if (user) {
      setLoading(false);
      setCurrentUser(user);
      setIsLogin(true);
      handleAuthConnectionUser(user);

    } else {
      setCurrentUser(nullDefaultValue);
      setIsLogin(loginDefaultValue);
    }
    setLoading(false);
  };

  const provideValues = {
    currentUser,
    isLogin,
    loading,
    errorAuth,
    reloadUserDB,
    setErrorAuth,
    handleFormChange,
    handleSubmitUser,
  };

  return (
    <authContext.Provider value={provideValues}>
       {loading ? <LoadingMarbidLoad /> : children}
    </authContext.Provider>
  );
};

export default AuthProvider;
export { authContext };
