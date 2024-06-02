const environment = import.meta.env.VITE_REACT_APP_NODE_ENVIROMENT;

const isLocal = () => {
  return environment && environment === "local";
};

const apisConfig = {
  protocol: isLocal() ? "http://" : "https://",
  url: isLocal() ? "localhost" : "obedient-jo-anne-marbid-9e9f64bb.koyeb.app",
  port: isLocal() ? `:${import.meta.env.VITE_PORT}` : "",
};

const apiUrl = `${apisConfig.protocol}${apisConfig.url}${apisConfig.port}/api`;

export default apiUrl;
