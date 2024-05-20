import React from "react";
import Header from "../components/shared-componentes/Header";
import { Image, Button, Input, Divider } from "@nextui-org/react";
import {
  MessageCircleMore,
  Feather,
  HeartIcon,
  Forward,
} from "lucide-react";
import { useParams } from "react-router-dom";
import useDataFetch from "@/hooks/useDataFetch";
import apiUrl from "@/config/apis.config";
import UserAvatarView from "@/components/user/UserAvatarView";
import { formatDate } from "@/functions/timeFunc";

const ServicePage = () => {

  const { serviceId } = useParams();

  const { data: service, isLoading } = useDataFetch("services", `${apiUrl}/service/${serviceId}`);

  return (
    <div className=" service lg:h-screen">
      <Header />
      <div className="m-10 mb-0 flex flex-col lg:flex-row justify-center gap-10 lg:gap-32">
        <div className="">
          <Image
            className="rounded-tl-xl rounded-tr-xl"
            width={700}
            height={100}
            alt="Service img"
            radius="none"
            src={service?.image}
          />
          <div>

          </div>
          <div className="flex flex-row justify-between">
            <div className="text-small flex flex-col items-start gap-1 mt-3">
              <UserAvatarView user={service?.authorCreated} />
              <h3 className="font-medium text-2xl font-bold capitalize">{service?.title}</h3>
              <p className="text-lg font-bold">{service?.price}€</p>{" "}
            </div>
            <div className="flex flex-col items-end gap-5 mt-3">
              <div className="flex items-center justify-center gap-5">
                <div className="flex items-center justify-center gap-2 ">
                  <p>Likes</p>
                  <HeartIcon color="red" fill="red" size={15} />
                </div>
                <p className="text-sm">{formatDate(service?.createdAt)}</p>
              </div>

            </div>
          </div>
          <p className="text-sm md:w-[40em] ">
                {service?.content}
          </p>
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
          </div>
          <div className="flex mt-2  ">
            <Input
              type="email"
              variant="underlined"
              label="Añade un cometario"
              endContent={
                <Forward

                  className=" cursor-pointer text-black dark:text-white"
                />
              }
            />
          </div>
          <div className="mt-5 ">
            <h3 className="text-lg font-bold">Comentarios</h3>
            <div className="mt-5 dark:bg-[#27272A] bg- w-full rounded-xl">
              <p className="p-5 dark:text-white text-black">Sin Comentarios</p>
            </div>

          </div>
        </div>


      </div>
    </div>
  );
};

export default ServicePage;
