const environment = import.meta.env.VITE_REACT_APP_NODE_ENVIROMENT;

const isLocal = () => {
  return environment && environment === "local";
};

const apisConfig = {
  protocol: isLocal() ? "http://" : "https://",
  url: isLocal() ? "localhost" : "marbid-backed.onrender.com",
  port: isLocal() ? `:${import.meta.env.VITE_PORT}` : "",
};

const apiUrl = `${apisConfig.protocol}${apisConfig.url}${apisConfig.port}`;

export default apiUrl;
