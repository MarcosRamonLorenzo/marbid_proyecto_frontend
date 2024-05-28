import React from "react";
import { Card, CardBody, Image, CardFooter } from "@nextui-org/react";
import UserAvatarView from "../user/UserAvatarView";

const ServiceCard = ({ item, onClick }) => {

  return (
    <Card shadow="sm" className="flex flex-col items-start card">
      <CardBody className="overflow-visible p-0">
        <Image
          onClick={onClick}
          isZoomed
          shadow="sm"
          radius="xs"
          width="100%"
          alt={item?.title}
          className="w-full object-cover h-[240px] cursor-pointer"
          src={
            item?.image ||
            "https://firebasestorage.googleapis.com/v0/b/marbid-69744.appspot.com/o/Bliss-Fondo-de-Pantalla-Windows-XP.jpg?alt=media&token=8af5ecf8-5aee-4797-b4ad-ac3a5cd5b392"
          }
        />
      </CardBody>

      <CardFooter className="text-small flex flex-col items-start gap-2">
        <div
          className="flex justify-start items-start cursor-pointer"
          onClick={() => {
            /*Si es el mismo que no vaya a su perfil*/
            () => {
              currentUser.uid !== item.user.id &&
                navigate(`/user/${item.user.id}`);
            };
          }}
        >
          <User
            name={item.authorCreated?.name}
            description={item?.authorCreated?.label}
            avatarProps={{
              src: `${item?.authorCreated?.avatar_img}`,
            }}
          />
        </div>
        <h3 className="font-medium text-2xl">
          {item?.title?.length > 50
            ? item?.title.substring(0, 50) + "..."
            : item?.title}
        </h3>
        <p className="text-start">
          {item?.content?.length > 55
            ? item?.content.substring(0, 55) + "..."
            : item?.content}
        </p>
        <p className="text-default-500 text-xl font-bold self-end">
          {item?.price}€
        </p>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
