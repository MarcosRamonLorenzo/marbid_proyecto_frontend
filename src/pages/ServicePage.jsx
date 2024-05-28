import { useState, useEffect } from "react";
import Header from "../components/shared-componentes/Header";
import { Image, Button } from "@nextui-org/react";
import {
  MessageCircleMore,
  Feather,
  HeartIcon,
  Heart,
  HeartOff,
} from "lucide-react";
import { useParams } from "react-router-dom";
import useDataFetch from "@/hooks/useDataFetch";
import apiUrl from "@/config/apis.config";
import UserAvatarView from "@/components/user/UserAvatarView";
import { formatDate } from "@/functions/timeFunc";
import Loading from "@/components/shared-componentes/Loadings/Loading";
import CommentProvider from "@/contexts/CommentProvider";
import CommentsServiceList from "@/components/comments/CommentsServiceList";
import CommentInput from "@/components/comments/CommentInput";

import { getServiceLikes } from "@/functions/likeFunct";
import useAuth from "@/hooks/useAuth";
import useLike from "@/hooks/useLike";

const ServicePage = () => {
  const { serviceId } = useParams();
  const { isServiceLiked, handleLikeService, handleDeleteLike } = useLike();
  const { currentUser } = useAuth();

  const { data: service, isLoading } = useDataFetch(
    "services",
    `${apiUrl}/service/${serviceId}`
  );

  // Likes Service
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

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
    <div className=" service lg:h-screen">
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
            <div className="text-small flex flex-col items-start gap-1 mt-3">
              <UserAvatarView user={service?.authorCreated} />
              <h3 className="font-medium text-2xl font-bold capitalize">
                {service?.title}
              </h3>
              <p className="text-xs font-bold">{service?.category?.name}</p>
              <p className="text-xl font-bold">{service?.price}€</p>
            </div>
            <div className="flex flex-col items-end gap-5 mt-3">
              <div className="flex items-center justify-center gap-5">
                <div className="flex items-center justify-center gap-2 ">
                  <p>Likes {likes}</p>
                  <HeartIcon color="red" fill="red" size={15} />
                </div>
                <p className="text-sm">{formatDate(service?.createdAt)}</p>
              </div>
            </div>
          </div>
          <p className="text-sm md:w-[40em] ">{service?.content}</p>
          <div className="flex items-center justify-start gap-2 mt-10 ">
            <Button
              radius="sm"
              className=" bg-pink-400 text-white py-0"
              endContent={
                <MessageCircleMore size={16} color="#ffffff" strokeWidth={2} />
              }
            >
              Contactar
            </Button>
            <Button
              radius="sm"
              className="bg-[#4159A8] text-white py-0"
              endContent={<Feather size={16} color="#ffffff" strokeWidth={2} />}
            >
              Aplicar Anuncio
            </Button>
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
                  setLikes(likes-1);
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
                  handleLikeService(currentUser?.uid, service);
                  setIsLiked(true);
                  setLikes(likes+1);
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
