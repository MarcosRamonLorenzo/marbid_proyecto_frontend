import { useEffect, useState } from "react";
import CommentPreviewUser from "./CommentPreviewUser";
import { getCommentsByUserId } from "@/functions/commentsFunc";
import useAuth from "@/hooks/useAuth";
import { Spinner } from "@nextui-org/react";


const UserCommentsList = ({idUser}) => {
  const { currentUser } = useAuth();

  const [comments, setComments] = useState([]);

  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const comments = await getCommentsByUserId( idUser || currentUser?.uid);
      setComments(comments.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (currentUser) {
        fetchData()
    }
  }, []);

  if (loading) return <Spinner />;

  return (
    <>
      {comments.length ? (
        <div className="flex flex-col gap-6 mt-2">
          {comments.map((comment) => (
            <CommentPreviewUser key={comment.id} comment={comment} />
          ))}
        </div>
      ) : (
        <h1>No se encuentran comentarios</h1>
      )}
    </>
  );
};

export default UserCommentsList;
