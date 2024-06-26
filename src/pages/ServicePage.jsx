import { useState, useEffect } from "react";
import Header from "../components/shared-componentes/Header";
import { Image, Button } from "@nextui-org/react";
import { Feather, HeartIcon, Heart, HeartOff } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";

import apiUrl from "@/config/apis.config";

import UserAvatarView from "@/components/user/UserAvatarView";
import CommentInput from "@/components/comments/CommentInput";
import CommentsServiceList from "@/components/comments/CommentsServiceList";
import Loading from "@/components/shared-componentes/Loadings/Loading";

import { formatDate } from "@/functions/timeFunc";
import { getServiceLikes } from "@/functions/likeFunct";

import CommentProvider from "@/contexts/CommentProvider";

import useDataFetch from "@/hooks/useDataFetch";
import useAuth from "@/hooks/useAuth";
import useLike from "@/hooks/useLike";
import useService from "@/hooks/useService";

const ServicePage = () => {
  const { serviceId } = useParams();
  const { isServiceLiked, handleLikeService, handleDeleteLike } = useLike();
  const { currentUser } = useAuth();
  const { handleApplyService } = useService();

  const { data: service, isLoading } = useDataFetch(
    "services",
    `${apiUrl}/service/${serviceId}`
  );

  // Likes Service
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const navigate = useNavigate();

  const getLikes = async () => {
    const likes = await getServiceLikes(serviceId);
    setLikes(likes);
  };

  const handleIsLiked = async () => {
    if (await isServiceLiked(currentUser?.uid, serviceId)) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  };

  useEffect(() => {
    getLikes();
  }, []);

  useEffect(() => {
    handleIsLiked();
  }, [currentUser, serviceId]);

  if (isLoading) return <Loading />;

  return (
    <div className=" service min-h-screen h-full">
      <Header />
      <div className="m-10 mb-0 flex flex-col md:flex-row justify-center gap-10 lg:gap-32">
        <div className="">
          <Image
            className="rounded-tl-xl rounded-tr-xl"
            width={700}
            height={100}
            alt="Service img"
            radius="none"
            src={service?.image}
          />
          <div></div>
          <div className="flex flex-row justify-between">
            <div className="text-small flex flex-col items-start justify-start gap-1 mt-3">
              <UserAvatarView user={service?.authorCreated} />
              <h3 className="font-medium text-2xl font-bold capitalize">
                {service?.title}
              </h3>
              <p className="text-xs font-bold">{service?.category?.name}</p>
              <p className="text-xl font-bold">{service?.price}€</p>
            </div>
            <div className="flex flex-col items-end gap-5 mt-3">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-5 text-[0.7em] sm:text-sm">
                <div className="flex items-center justify-center gap-2  ">
                  <p>Likes {likes}</p>
                  <HeartIcon color="red" fill="red" size={15} />
                </div>
                <p>{formatDate(service?.createdAt)}</p>
              </div>
            </div>
          </div>
          <p className="text-sm md:w-[40em] ">{service?.content}</p>
          <div className="flex items-center justify-start gap-2 mt-10 ">
            {currentUser?.uid !== service?.authorCreated?.id &&
              !service?.status && (
                <Button
                  radius="sm"
                  className="bg-[#4159A8] text-white py-0"
                  endContent={
                    <Feather size={16} color="#ffffff" strokeWidth={2} />
                  }
                  onClick={() => {
                    if (currentUser) {
                      handleApplyService(service?.id);
                    } else {
                      navigate("/log-in");
                    }
                  }}
                >
                  Aplicar Anuncio
                </Button>
              )}

            {isLiked ? (
              <Button
                color="danger"
                radius="sm"
                className=" text-white py-0"
                endContent={
                  <HeartOff size={16} color="#ffffff" strokeWidth={2} />
                }
                onClick={() => {
                  handleDeleteLike(currentUser?.uid, serviceId);
                  setIsLiked(false);
                  setLikes(likes - 1);
                }}
              >
                Quitar de Favoritos
              </Button>
            ) : (
              <Button
                color="danger"
                radius="sm"
                className=" text-white py-0"
                endContent={<Heart size={16} color="#ffffff" strokeWidth={2} />}
                onClick={() => {
                  if (currentUser) {
                    handleLikeService(currentUser.uid, service);
                    setIsLiked(true);
                    setLikes(likes + 1);
                  } else {
                    navigate("/log-in");
                  }
                }}
              >
                Añadir a Favoritos
              </Button>
            )}
          </div>
          <CommentProvider idService={service?.id}>
            <CommentInput className={"flex mt-2"} />
            <div className="mt-5 comments">
              <h3 className="text-lg font-bold">Comentarios</h3>
              <div className="mt-5 dark:bg-[#27272A]  w-full rounded-xl">
                <CommentsServiceList
                  className={
                    "p-5 dark:text-white text-black flex flex-col gap-9"
                  }
                />
              </div>
            </div>
          </CommentProvider>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
