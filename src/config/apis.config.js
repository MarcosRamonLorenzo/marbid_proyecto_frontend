const environment = import.meta.env.VITE_REACT_APP_NODE_ENVIROMENT;

const isLocal = () => {
  return environment && environment === "local";
};

const apisConfig = {
  protocol: isLocal() ? "http://" : "https://",
  url: isLocal() ? "localhost" : "tragic-kaylee-marbidd-0359b211.koyeb.app",
  port: isLocal() ? `:${import.meta.env.VITE_PORT}` : "",
};

const apiUrl = `${apisConfig.protocol}${apisConfig.url}${apisConfig.port}/api`;

export default apiUrl;
