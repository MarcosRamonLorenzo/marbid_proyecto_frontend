import React from "react";
import { createContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

const authContext = createContext();

const AuthProvider = ({ children }) => {
  const userDefaultValue = null;
  const loginDefaultValue = false;

  const [currentUser, setCurrentUser] = useState(userDefaultValue);
  const [isLogin, setIsLogin] = useState(loginDefaultValue);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  const initializeUser = async () => {
    if (currentUser) {
      setCurrentUser(currentUser);
      setIsLogin(loginDefaultValue);
    } else {
      setCurrentUser(userDefaultValue);
      setIsLogin(loginDefaultValue);
    }
    setIsLogin(false);
  };

  const provideValues = { currentUser, isLogin, loading };

  return (
    <authContext.Provider value={provideValues}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
export { authContext };
