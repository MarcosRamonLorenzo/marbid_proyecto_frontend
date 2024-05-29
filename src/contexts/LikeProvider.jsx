import { createContext, useState } from "react";
import {
  likeService,
  getUserLikeServices,
  deleteLike,
  isServiceLikedByUser,
} from "@/functions/likeFunct";


const LikeContext = createContext();

const LikeProvider = ({ children }) => {
  const [userLikes, setUserLikes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUserLikes = async (idUser) => {
    const userLikes = await getUserLikeServices(idUser);
    setUserLikes(userLikes);
  };

  const handleLikeService = async (userId,service) => {
    const like = { user: userId, service: service.id };
    const newLike = await likeService(like);
    setUserLikes([...userLikes, service]);
  };

  const handleDeleteLike = async (userId,serviceId) => {
    await deleteLike(userId,serviceId);
    setUserLikes(userLikes.filter((like) => like.serviceId !== serviceId));
  };

  const isServiceLiked = async (idUser, idService) => {
    const comprobation = await isServiceLikedByUser(idUser, idService);
    return comprobation;
  };

  const value = {
    fetchUserLikes,
    userLikes,
    loading,
    handleLikeService,
    handleDeleteLike,
    isServiceLiked,
  };

  return <LikeContext.Provider value={value}>{children}</LikeContext.Provider>;
};

export { LikeContext };
export default LikeProvider;
