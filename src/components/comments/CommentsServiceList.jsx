import React from "react";
import useComment from "@/hooks/useComment";
import Loading from "../shared-componentes/Loadings/Loading";
import Comment from "./Comment";

const CommentsServiceList = ({ className }) => {
  const { loading, comments , handleDeleteComment } = useComment();
  if (loading) return <Loading />;

  return (
    <div className={className}>
      {comments && comments.length ? (
        comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              date={comment?.createdAt}
              author={comment?.author}
              content={comment?.content}
              username={comment?.author?.name}
              onDelete={()=>{handleDeleteComment(comment.id)}}
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
