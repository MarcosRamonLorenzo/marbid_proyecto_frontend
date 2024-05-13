import { useState, useEffect, createContext } from "react";

const alertsContext = createContext();

const AlertsProvider = ({ children }) => {
  const defaultValueAlert = { state: false, message: "" };

  const [alertError, setMessageErrorAlert] = useState(defaultValueAlert);
  const [alertSuccess, setMessageSuccessAlert] = useState(defaultValueAlert);

  const setErrorAlert = (message) => {
    setMessageErrorAlert({ state: true, message });
    setTimeout(() => {
      setMessageErrorAlert(defaultValueAlert);
    }, 3000);
  };

  const setSuccessAlert = (message) => {
    setMessageSuccessAlert({ state: true, message });

    setTimeout(() => {
      setMessageSuccessAlert(defaultValueAlert);
    }, 3000);
  };

  const providerValues = {
    alertError,
    alertSuccess,
    setErrorAlert,
    setSuccessAlert,
  };

  return (
    <alertsContext.Provider value={providerValues}>
      {children}
    </alertsContext.Provider>
  );
};

export { alertsContext };
export default AlertsProvider;
