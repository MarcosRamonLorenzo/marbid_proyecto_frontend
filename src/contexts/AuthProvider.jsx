import React, { createContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  doCreateUserWithEmailAndPassword,
  doSignInWithEmailAndPassword,
  getUserDB,
  createUser,
  doSignOut,
} from "@/functions/authFunc";
import LoadingMarbidLoad from "@/components/shared-componentes/Loadings/LoadingMarbidLoad";
import useAlert from "@/hooks/useAlert";

const authContext = createContext();

const AuthProvider = ({ children }) => {
  const { setErrorAlert, setSuccessAlert } = useAlert();

  const nullDefaultValue = null;
  const stringDefaultValue = "";
  const loginDefaultValue = false;
  const emailValidFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const [currentUser, setCurrentUser] = useState(nullDefaultValue);
  const [isLogin, setIsLogin] = useState(loginDefaultValue);
  const [loading, setLoading] = useState(true);
  const [errorModal, setErrorModal] = useState(stringDefaultValue);

  const formObject = {
    email: "",
    password: "",
  };

  const [formUser, setFormUser] = useState(formObject);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormUser({ ...formUser, [name]: value });
  };

  const handleErrorModal = (value) => {
    setErrorModal(value);
  };

  //Submit user with email
  const handleSubmitUser = async (e, action) => {
    e.preventDefault();
    try {
      if (formUser.email.length < 1) {
        setErrorModal("Rellena el campo de email");
      } else if (!emailValidFormat.test(formUser.email)) {
        setErrorModal("El email no es correcto");
      } else if (formUser.password.length < 1) {
        setErrorModal("Rellena el campo de contraseña");
      } else {
        if (action === "login") {
          await doSignInWithEmailAndPassword(formUser.email, formUser.password);
          setSuccessAlert("Inicio de sesión exitoso");
        } else {
          if (formUser.password === formUser.repeatPassword) {
            await doCreateUserWithEmailAndPassword(
              formUser.email,
              formUser.password
            );
            setSuccessAlert("Cuenta creada con éxito");
          } else if (
            formUser.repeatPassword == null ||
            formUser.repeatPassword.length < 1
          ) {
            setErrorModal("Rellena el campo de contraseña auxiliar");
          } else {
            setErrorModal("Las contraseñas no coinciden");
          }
        }
      }
    } catch (error) {
      setErrorModal(error.message);
    }
  };

  //Submit user with providers
  const handleSignInProvider = async (signInFunction) => {
    try {
      await signInFunction();
      setSuccessAlert("Inicio de sesión exitoso");
    } catch (error) {
      setErrorAlert("Error al iniciar sesión: " + error.message);
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
  };

  const reloadUserDB = (user) => {
    if (user.id === currentUser.uid) {
      setCurrentUser({ ...currentUser, userDB: user });
      console.log(currentUser);
    }
  };

  const handleSignOut = async () => {
    try {
      await doSignOut();
      setSuccessAlert("Cerrado de sesión exitoso");
    } catch (error) {
      setErrorAlert("Error al cerrar sesión: " + error.message);
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
    errorModal,
    reloadUserDB,
    handleFormChange,
    handleSubmitUser,
    handleSignInProvider,
    handleSignOut,
    handleErrorModal,
  };

  return (
    <authContext.Provider value={provideValues}>
      {loading ? <LoadingMarbidLoad /> : children}
    </authContext.Provider>
  );
};

export default AuthProvider;
export { authContext };
