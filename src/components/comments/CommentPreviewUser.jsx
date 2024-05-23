import React from "react";
import { Card, CardBody, Image } from "@nextui-org/react";
import { formatDate } from "@/functions/timeFunc";
import { useNavigate } from "react-router-dom";

const CommentPreviewUser = ({ comment }) => {
  const navigate = useNavigate();

  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 min-w-[310px] w-full sm:w-96 md:w-[30em] cursor-pointer"
      shadow="sm"
      radius="sm"
    >
      <CardBody
        className="p-0"
        onClick={() => {
          navigate(`/servicio/${comment?.service?.id}`);
        }}
      >
        <div className="flex sm:flex-row items-start justify-center gap-3 ">
          <Image
            alt="Album cover"
            className="object-cover m-0 p-0 rounded-tr-none rounded-br-none h-20 w-20 sm:h-32 sm:w-32 "
            shadow="md"
            src={comment?.service?.image}
          />
          <div className="flex flex-col items-start gap-2 p-3 w-full">
            <h1 className="text-md sm:text-xl capitalize font-bold text-center sm:text-left">
              {" "}
              {comment?.content.substring(0, 20)}...
            </h1>
            <p className="text-gray-500 text-center sm:text-left">
              {formatDate(comment?.createdAt)}
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default CommentPreviewUser;
