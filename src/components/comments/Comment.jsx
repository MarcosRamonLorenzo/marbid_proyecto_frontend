import React from "react";
import { formatDate } from "@/functions/timeFunc";
import { Avatar, Divider } from "@nextui-org/react";

const Comment = ({
  id = "",
  avatar = "",
  username = "",
  content = "",
  date,
}) => {
  return (
    <div key={id} className="flex flex gap-2">
        <Avatar className="w-10 h-10 rounded-full" src={avatar} alt="avatar" />
        <div className="flex flex-col">
          <div className="flex gap-2 items-center"> 
            <p className="text-md font-bold">{username}</p>
            <Divider orientation="vertical"  />
            <p className="text-sm">{formatDate(date)}</p>
          </div>
          <p className="text-sm mt-3">{content}</p>
        </div> 
    </div>
  );
};

export default Comment;
