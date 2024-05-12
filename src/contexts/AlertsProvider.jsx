import { useState, useEffect, createContext } from "react";

const alertsContext = createContext();

const AlertsProvider = ({ children }) => {
  const defaultValueAlert = { state: false, message: "" };

  const [alertError, setErrorAlert] = useState(defaultValueAlert);
  const [alertSuccess, setSuccessAlert] = useState(defaultValueAlert);

  const setError = (message) => {
    setErrorAlert({ state: true, message });
    setTimeout(() => {
      setErrorAlert(defaultValueAlert);
    }, 3000);
  };

  const setSuccess = (message) => {
    setSuccessAlert({ state: true, message });

    setTimeout(() => {
      setSuccessAlert(defaultValueAlert);
    }, 3000);
  };

  const providerValues = { alertError, alertSuccess, setError, setSuccess };

  return (
    <alertsContext.Provider value={providerValues}>
      {children}
    </alertsContext.Provider>
  );
};

export { alertsContext };
export default AlertsProvider;
