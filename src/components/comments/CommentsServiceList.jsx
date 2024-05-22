import React from "react";
import useComment from "@/hooks/useComment";
import Loading from "../shared-componentes/Loadings/Loading";
import Comment from "./Comment";

const CommentsServiceList = ({ className }) => {
  const { loading, comments } = useComment();
  console.log(comments);
  if (loading) return <Loading />;

  return (
    <div className={className}>
      {comments && comments.length ? (
        comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              date={comment?.createdAt}
              avatar={comment?.author?.avatar_img}
              content={comment?.content}
              username={comment?.author?.name}
            />
          );
        })
      ) : (
        <h1>Sin comentarios</h1>
      )}
    </div>
  );
};

export default CommentsServiceList;
