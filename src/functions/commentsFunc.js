import apiUrl from "@/config/apis.config";

export const createComment = async (comment) => {
  const respose = await fetch(`${apiUrl}/comment/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(comment),
  });
  return respose.json();
};


export const deleteComment = async (commentId) => {
    const response = await fetch(`${apiUrl}/comment/${commentId}`, {
        method: "DELETE",
    });
    return response.json();
    }

    
 export const getCommentsByServiceId = async (serviceId) => {
    const response = await fetch(`${apiUrl}/comment/service/${serviceId}`);
    return response.json();
 }   

 export const getCommentsByUserId = async (userId) => {
    const response = await fetch(`${apiUrl}/comment/user/${userId}`);
    return response.json();
 }


 export const validateMessage = (message) => {
    if (!message || message.length < 1) {
        return "Rellena el campo de comentario";
    } else if (message.length > 500) {
        return "El comentario no puede tener más de 500 caracteres";
    } else {
        return null;
    }
 }