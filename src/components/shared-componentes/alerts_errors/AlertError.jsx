import React from 'react';
import ReactDOM from 'react-dom';
import useAlert from '@/hooks/useAlert';

const AlertError = () => {

  const { alertError: { message } } = useAlert();

  return ReactDOM.createPortal(
    (
      <div
        role="alert"
        className=" fixed m-auto m-auto inset-0
        z-[99] w-[30em] mt-2 h-12 bg-red-100 dark:bg-red-900 border-l-4 border-red-500 dark:border-red-700 text-red-900 dark:text-red-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-red-200 dark:hover:bg-red-800 transform hover:scale-105"
      >
        <svg
          stroke="currentColor"
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5 flex-shrink-0 mr-2 text-red-600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          ></path>
        </svg>
        <p className="text-xs font-semibold">Error {message && ` - ${message}`}</p>
      </div>
    ),
    document.getElementById('alert-error')
  );
};

export default AlertError;