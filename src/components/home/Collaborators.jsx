import React from "react";
import XTwitterIcon from "../shared-componentes/icons/XTwitterIcon";
import MetaIcon from "../shared-componentes/icons/MetaIcon";
import GitHubIcon from "../shared-componentes/icons/GitHubIcon";
import GoogleIcon from "../shared-componentes/icons/GoogleIcon";
import MicrosoftIcon from "../shared-componentes/icons/MicrosoftIcon";

const Collaborators = () => {
  return (
    <section className="flex flex-col items-center gap-10 mt-20 justify-center mx-5">
      <h2 className="text-2xl">Collaborators</h2>
      <div className="flex flex-row md:gap-20 gap-5  ">
        <button
          href="/"
          className="group flex justify-center p-2 rounded-md drop-shadow-xl  from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
        >
          {/* Imagen X. */}
          <XTwitterIcon />
          <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
            X
          </span>
        </button>
        <button
          href="/"
          className="group flex justify-center p-2 rounded-md drop-shadow-xl  from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
        >
          {/* Imagen Meta. */}
         <MetaIcon/>
          <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
            Meta
          </span>
        </button>
        <button
          href="/"
          className="group flex justify-center p-2 rounded-md drop-shadow-xl  from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
        >
          {/* Imagen gitHub. */}
         <GitHubIcon/>
          <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
            GitHub
          </span>
        </button>
        <button
          href="/"
          className="group flex justify-center p-2 rounded-md drop-shadow-xl  from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
        >
          {/* Imagen Google. */}
          <GoogleIcon/>
          <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
            Google
          </span>
        </button>
        <button
          href="/"
          className="group flex justify-center p-2 rounded-md drop-shadow-xl  from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
        >
          {/* Imagen Microsoft. */}
         <MicrosoftIcon />
          <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
            Microsoft
          </span>
        </button>
      </div>
    </section>
  );
};

export default Collaborators;
