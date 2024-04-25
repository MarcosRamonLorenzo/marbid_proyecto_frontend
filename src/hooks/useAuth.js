import { useContext } from "react";
import { authContext } from "../contexts/AuthProvider";

const useAuth = () => {
  const authContextUsers = useContext(authContext);

  return authContextUsers;
};

export default useAuth;
