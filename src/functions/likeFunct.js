import apiUrl from "@/config/apis.config";

export const likeService = async (like) => {
  const respose = await fetch(`${apiUrl}/like/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(like),
  });
  return respose.json();
};

export const getServiceLikes = async (serviceId) => {
  const respose = await fetch(`${apiUrl}/like/service/${serviceId}`);
  return respose.json();
};

export const isServiceLikedByUser = async (userId, serviceId) => {
  const respose = await fetch(`${apiUrl}/like/isliked/${userId}/${serviceId}`);
  return respose.json();
};

export const getUserLikeServices = async (userId) => {
  const respose = await fetch(`${apiUrl}/like/user/${userId}`);
  return respose.json();
};

export const deleteLike = async (userId, serviceId) => {
  const respose = await fetch(`${apiUrl}/like/${userId}/${serviceId}`, {
    method: "DELETE",
  });
  return respose.json();
};
