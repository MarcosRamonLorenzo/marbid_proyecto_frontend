import { useContext } from "react";
import { CommentContext } from "@/contexts/CommentProvider";

const useComment = () => {
  const commentContext = useContext(CommentContext);

  return commentContext;
};

export default useComment;
