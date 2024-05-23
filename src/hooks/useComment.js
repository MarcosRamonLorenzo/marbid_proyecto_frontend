import { useContext } from "react";
import { CommentContext } from "@/contexts/CommentProvider";

const useAuth = () => {
  const commentContext = useContext(CommentContext);

  return commentContext;
};

export default useAuth;
