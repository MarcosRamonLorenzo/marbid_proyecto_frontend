import { useState, useEffect, createContext } from "react";
import useAlert from "@/hooks/useAlert";
import {
  createComment,
  deleteComment,
  getCommentsByServiceId,
  validateMessage
} from "@/functions/commentsFunc";
import useAuth from "@/hooks/useAuth";

const CommentContext = createContext();

const CommentProvider = ({ idService, children }) => {
  const { setSuccessAlert, setErrorAlert } = useAlert();
  const { currentUser } = useAuth();

  const initialValueMessage = {
    content: "",
    authorId: "",
    serviceId: idService,
  };

  
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState(initialValueMessage);
  const [loading, setLoading] = useState(false);

  const handleCreateComment = async () => {
    comment.authorId = currentUser.uid;

    const validate = validateMessage(comment.content);
    if (validate) {
      setErrorAlert(validate)
    } else {
      try {
        setLoading(true);
        const {error,data:newComment} = await createComment(comment);
        if (error) throw error; 
        setComments([newComment, ...comments]);
        setSuccessAlert("Comentario creado correctamente");
        setComment(initialValueMessage);
      } catch (error) {
        setErrorAlert("Error en el comentario");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleGetCommentByServiceId = async (serviceId) => {
    try {
      setLoading(true);
      const comments = await getCommentsByServiceId(serviceId);
      setComments(comments.data);
    } catch (error) {
      setErrorAlert("Error al recibir los comentarios");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteComment = async (id) => {
    try {
      setLoading(true);
      await deleteComment(id);
      setComments(comments.filter((comment) => comment.id !== id));
      setSuccessAlert("Comentario eliminado correctamente");
    } catch (error) {
      setErrorAlert("Error al eliminar el servicio");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (idService) {
      handleGetCommentByServiceId(idService);
    }
  }, [idService]);

  const value = {
    handleCreateComment,
    handleGetCommentByServiceId,
    handleDeleteComment,
    comment,
    setComment,
    comments,
    loading,
  };

  return (
    <CommentContext.Provider value={value}>{children}</CommentContext.Provider>
  );
};

export { CommentContext };
export default CommentProvider;
