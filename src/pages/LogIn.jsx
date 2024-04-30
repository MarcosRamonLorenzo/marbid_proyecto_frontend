import { doSignInWithGoogle } from "@/firebase/authFunc.js";
import { Link } from "react-router-dom";
import "./scss/Login.scss";

import useAuth from "@/hooks/useAuth.js";

const LogIn = ({ isRegister }) => {
  const { handleFormChange, handleSubmitUser } = useAuth();

  return (
    <div className="bg-[url('https://picsum.photos/1920/1080.jpg')] h-screen w-screen bg-cover bg-center">
      <section>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-8">
          <div className="bg-white xl:mx-auto xl:w-full shadow-md p-4 xl:max-w-sm 2xl:max-w-md rounded-md">
            <div className="mb-2 flex justify-center"></div>
            <h2 className="text-center text-2xl font-bold leading-tight text-black">
              {isRegister
                ? "Sign Up for a new account"
                : "Sign in to your account"}
            </h2>
            <form className="mt-8" method="POST" action="#">
              <div className="space-y-5">
                <div className="inputFormulario">
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
                  <div className="inputFormulario">
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
                  <div className="inputFormulario">
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
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                    type="button"
                    onClick={(e) => {
                      handleSubmitUser(e, isRegister ? "register" : "login");
                    }}
                  >
                    {isRegister ? "Get Started" : "Sign In"}
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-3 space-y-3">
              <button
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                type="button"
                onClick={() => {
                  doSignInWithGoogle();
                }}
              >
                <span className="mr-2 inline-block">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-rose-500"
                  >
                    <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                  </svg>
                </span>
                {isRegister ? "Sign up with Google" : "Sign in with Google"}
              </button>
            </div>
            <div className="mt-3 text-center text-sm text-gray-600">
              {isRegister ? (
                <p>
                  <span className="text-black">
                    Already have an account?&nbsp;
                  </span>
                  <Link to="/log-in" className="text-blue-700 hover:underline">
                    Sign in
                  </Link>
                </p>
              ) : (
                <p>
                  <span className="text-black">
                    Don't have an account?&nbsp;
                  </span>
                  <Link to="/sign-up" className="text-blue-700 hover:underline">
                    Create a free account
                  </Link>
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogIn;
