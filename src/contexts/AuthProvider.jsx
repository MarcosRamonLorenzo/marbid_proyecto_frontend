import React from "react";
import { createContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { redirect, useNavigate } from "react-router-dom";
import { doCreateUserWithEmailAndPassword, doSignInWithEmailAndPassword } from "@/firebase/authFunc";
import apiUrl from "@/config/apis.config"

const authContext = createContext();


const AuthProvider = ({ children }) => {
  const userDefaultValue = null;
  const loginDefaultValue = false;

  const [currentFireBaseUser, setCurrentFireBaseUser] = useState(userDefaultValue);
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
       await doCreateUserWithEmailAndPassword(formUser.email, formUser.password);
      }
    } catch (error) {
      console.log(error);
    }
  };


  const getUser = async (uid) => {
    try {
      const {data} = await fetch(`${apiUrl}/user/${uid}`).then((res) => res.json());
      return data;

    } catch (error) {
      
      console.log(error);
    }
  };
  
  const createUser = async (user) => {
    try {
      const response = await fetch(`${apiUrl}/user`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });
      console.log(response);
      return response.json();
    } catch (error) {
      console.log(error);
    }
    
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
      setCurrentFireBaseUser(user);
      setIsLogin(true);
      if (!await getUser(user.uid)) {
        createUser({
          id: user.uid,
          email: user.email
        });
      }

    } else {
      setCurrentFireBaseUser(userDefaultValue);
      setIsLogin(loginDefaultValue);
      
    }
    navigate("/");
    setLoading(false);
   
  };

  const provideValues = {
    currentFireBaseUser,
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
