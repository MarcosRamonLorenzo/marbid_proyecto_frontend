import {
  doSignInWithGoogle,
  doSignInWithGitHub,
  doSignInWithTwitter,
} from "@/functions/authFunc.js";

import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./scss/Login.scss";
import ModalErrorAccept from "@/components/shared-componentes/modals/ModalErrorAccept";
import { useModal } from "@/hooks/useModal";
import { useNavigate } from "react-router-dom";

import useAuth from "@/hooks/useAuth.js";
import GoogleIcon from "@/components/shared-componentes/icons/GoogleIcon";
import GitHubIcon from "@/components/shared-componentes/icons/GitHubIcon";
import XTwitterIcon from "@/components/shared-componentes/icons/XTwitterIcon";

const LogIn = ({ isRegister }) => {
  const navigate = useNavigate();

  const {
    handleFormChange,
    handleSubmitUser,
    handleErrorModal,
    handleSignInProvider,
    isLogin,
    errorModal,
  } = useAuth();

  const { isOpen, openModal, closeModal } = useModal();

  useEffect(() => {
    if (errorModal) {
      openModal();
    }
    if (isLogin) {
      navigate("/");
    }
  }, [errorModal,isLogin]);

  

  return (
    <>
      <div id="login-container" className=" bg-[url('https://picsum.photos/1920/1080.jpg')] h-screen w-screen bg-cover bg-cente">
        <section className="fixed inset-0 flex items-center justify-center">
          <div className="absolute top-10 left-10">
            <Link to={"/"}>
              <img src="https://firebasestorage.googleapis.com/v0/b/marbid-69744.appspot.com/o/logos-icons%2FlogoMarbidWeb.webp?alt=media&token=3522c0e5-6a6a-415a-90c1-2c7782ecfe7a" className="h-8" />
            </Link>
          </div>
          <div className="flex items-center justify-center px-2 py-6 sm:px-6 sm:py-16 lg:px-8 lg:py-8">
            <div className="bg-[#eee] w-[23em] md:w-[26em] p-4 rounded-md">
              <div className="mb-2 flex justify-center"></div>
              <h2 className="text-center text-2xl font-bold leading-tight text-black">
                {isRegister
                  ? "Sign Up for a new account"
                  : "Sign in to your account "}
              </h2>
              <div className="mt-8">
                <div className="space-y-5">
                  <div className="input-formulario">
                    <input
                      required
                      type="text"
                      className="input"
                      name="email"
                      onChange={(e) => {
                        handleFormChange(e);
                      }}
                    />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Email</label>
                  </div>
                  <div>
                    <div className="input-formulario">
                      <input
                        required
                        type="password"
                        className="input"
                        name="password"
                        onChange={(e) => {
                          handleFormChange(e);
                        }}
                      />
                      <span className="highlight"></span>
                      <span className="bar"></span>
                      <label>Password</label>
                      {!isRegister && (
                        <a
                          className="text-sm font-semibold text-gray-700 hover:underline "
                          title=""
                          href="#"
                        >
                          Forgot password?
                        </a>
                      )}
                    </div>
                  </div>
                  {isRegister && (
                    <div className="input-formulario">
                      <input
                        required
                        type="password"
                        className="input"
                        name="repeatPassword"
                        onChange={(e) => {
                          handleFormChange(e);
                        }}
                      />
                      <span className="highlight"></span>
                      <span className="bar"></span>
                      <label>Repeat password</label>
                    </div>
                  )}
                  <div>
                    <button
                      className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white transition duration-800 ease-in-out transform hover:bg-blue-600 hover:scale-105"
                      type="button"
                      onClick={(e) => {
                        handleSubmitUser(e, isRegister ? "register" : "login");
                      }}
                    >
                      {isRegister ? "Get Started" : "Sign In"}
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-3 space-y-3">
                <button
                  className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none hover:scale-105"
                  type="button"
                  onClick={() => {
                    handleSignInProvider(doSignInWithGoogle);
                  }}
                >
                  <span className="mr-2 inline-block">
                    <GoogleIcon height={8} width={8} />
                  </span>
                  {isRegister ? "Sign up with Google" : "Sign in with Google"}
                </button>
              </div>
              <div className="mt-3 space-y-3">
                <button
                  className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none hover:scale-105"
                  type="button"
                  onClick={() => {
                    handleSignInProvider(doSignInWithGitHub);
                  }}
                >
                  <span className="mr-2 inline-block">
                    <GitHubIcon height={8} width={8} />
                  </span>
                  {isRegister ? "Sign up with GitHub" : "Sign in with GitHub"}
                </button>
              </div>
              <div className="mt-3 space-y-3">
                <button
                  className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none hover:scale-105"
                  type="button"
                  onClick={() => {
                    handleSignInProvider(doSignInWithTwitter);
                  }}
                >
                  <span className="mr-2 inline-block">
                    <XTwitterIcon height={8} width={8} />
                  </span>
                  {isRegister ? "Sign up with X" : "Sign in with X"}
                </button>
              </div>
              <div className="mt-3 text-center text-sm text-gray-600">
                {isRegister ? (
                  <p>
                    <span className="text-black">
                      Already have an account?&nbsp;
                    </span>
                    <Link
                      to="/log-in"
                      className="text-blue-700 hover:underline"
                    >
                      Sign in
                    </Link>
                  </p>
                ) : (
                  <p>
                    <span className="text-black">
                      Don't have an account?&nbsp;
                    </span>
                    <Link
                      to="/sign-up"
                      className="text-blue-700 hover:underline"
                    >
                      Create a free account
                    </Link>
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
      <ModalErrorAccept
        isOpen={isOpen}
        onClose={() => {
          closeModal();
          handleErrorModal(null);
        }}
        text={errorModal}
      />
    </>
  );
};

export default LogIn;
