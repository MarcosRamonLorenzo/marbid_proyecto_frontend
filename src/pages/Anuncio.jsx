import React from "react";
import Cabecera from "../Cabecera";
import { Image, User, Button, Input, Divider } from "@nextui-org/react";
import {
  MessageCircleMore,
  Feather,
  Heart,
  SendHorizontal,
} from "lucide-react";

const Anuncio = () => {
  return (
    <div>
      <Cabecera />
      <div className="m-10 flex flex-col lg:flex-row justify-center gap-32">
        <div>
          <Image
            width={600}
            height={200}
            alt="NextUI hero Image with delay"
            src="https://app.requestly.io/delay/2000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
          />
          <div className="text-small flex flex-col items-start gap-4">
            <div className="flex justify-start items-start"></div>
            <h3 className="font-medium text-2xl">Anuncio Prueba</h3>
            <p className="text-2xl">20$</p>{" "}
            <p className="text-start w-96">
              Necesito programador web para desarrollar una página de comercio
              electrónico. La página debe tener un diseño atractivo, funcional.
            </p>
          </div>
        </div>
        <div className="flex flex-col ">
          <User
            className="flex justify-start items-start"
            name="Jane Doe"
            description="Product Designer"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
          />
          <Button
            radius="sm"
            className="mt-5 bg-[#F9C2FF] text-white py-0"
            endContent={
              <MessageCircleMore size={16} color="#ffffff" strokeWidth={2} />
            }
          >
            Contactar
          </Button>
          <Button
            radius="sm"
            className="mt-2 bg-[#4159A8] text-white py-0"
            endContent={<Feather size={16} color="#ffffff" strokeWidth={2} />}
          >
            Aplicar Anuncio
          </Button>
          <Button
            radius="sm"
            className="mt-2 bg-[#FE4F4E] text-white py-0"
            endContent={<Heart size={16} color="#ffffff" strokeWidth={2} />}
          >
            Añadir a Favoritos
          </Button>
          <div className="mt-5 ">
            <h3 className="text-2xl">Comentarios</h3>
            <div className="bg-[#F4F4F5]  w-96 h-96 rounded-xl">
              <p className="p-5">Sin Comentarios</p>
            </div>
            <Divider className="my-4" />

            <div className="flex mt-2 relative ">
              <Input type="email" label="Añade un cometario" className="" />
              <SendHorizontal
                size={16}
                color="#000"
                strokeWidth={1}
                className=" absolute right-4 top-3 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anuncio;
