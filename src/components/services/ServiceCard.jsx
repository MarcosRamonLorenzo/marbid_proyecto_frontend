import React from "react";
import { Card, CardBody, Image, CardFooter, User } from "@nextui-org/react";
import UserAvatarView from "../user/UserAvatarView";

const ServiceCard = ({ item, isLikeable, onClick }) => {

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
        <UserAvatarView user={item.authorCreated} /> 
        <h3 className="font-medium text-2xl">
          {item?.title.length > 50
            ? item?.title.substring(0, 50) + "..."
            : item?.title}
        </h3>
        <p className="text-start">
          {item?.content.length > 55
            ? item?.content.substring(0, 55) + "..."
            : item?.content}
        </p>
        <p className="text-default-500 text-xl font-bold self-end">
          {item?.price}€
        </p>
      </CardFooter>
      {isLikeable && (
        <label className="ui-like absolute top-4 right-4 z-10 ">
          <input type="checkbox" />
          <div className="like">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="">
              <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                id="SVGRepo_tracerCarrier"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"></path>
              </g>
            </svg>
          </div>
        </label>
      )}
    </Card>
  );
};

export default ServiceCard;
