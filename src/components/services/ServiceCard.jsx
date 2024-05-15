import React from "react";
import { Card, CardBody, Image, CardFooter, User } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ item }) => {
  const navigate = useNavigate();
  console.log(item);

  return (
    <Card shadow="sm" className="flex flex-col items-start card">
      <CardBody className="overflow-visible p-0">
        <Image
          onClick={() => {
            navigate(`/anuncio/${item?.title}`);
          }}
          isZoomed
          shadow="sm"
          radius="xs"
          width="100%"
          alt={item?.title}
          className="w-full object-cover h-[240px]"
          src={
            "https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_640.jpg"
          }
        />
      </CardBody>

      <CardFooter className="text-small flex flex-col items-start gap-4">
        <div className="flex justify-start items-start">
          <User
            name={item.user?.name}
            description={item?.user?.label}
            avatarProps={{
              src: `${item?.user?.avatar_img}`,
            }}
          />
        </div>
        <h3 className="font-medium text-2xl">{item?.title}</h3>
        <p className="text-default-500">{item?.price}</p>{" "}
        <p className="text-start">
          Necesito programador web para desarrollar una página de comercio
          electrónico. La página debe tener un diseño atractivo, funcional.
        </p>
      </CardFooter>
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
    </Card>
  );
};

export default ServiceCard;
