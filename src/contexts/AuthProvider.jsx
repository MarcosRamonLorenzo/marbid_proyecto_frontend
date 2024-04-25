import React from "react";
import { createContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {
  doCreateUserWithEmailAndPassword,
  doSignInWithEmailAndPassword,
} from "@/firebase/authFunc";

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
    console.log(formUser);
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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  const initializeUser = async (user) => {
    setLoading(true);
    if (user) {
      setLoading(false);
      console.log(user);
      setCurrentUser(user);
      setIsLogin(true);
    } else {
      setCurrentUser(userDefaultValue);
      setIsLogin(loginDefaultValue);
    }
    setLoading(false);
    navigate("/");
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
