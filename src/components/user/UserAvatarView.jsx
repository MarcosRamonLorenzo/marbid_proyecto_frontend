import React from 'react'
import { useNavigate } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import { User } from '@nextui-org/react';

const UserAvatarView = ({user}) => {

    const navigate = useNavigate();
    const {currentUser} = useAuth();

  return (
    <div
          className="flex justify-start items-start cursor-pointer"
          onClick={() => {
            /*Si es el mismo que no vaya a su perfil*/
            (currentUser.uid != user.id) && navigate(`/user/${user.id}`);
          }}
        >
          <User
            name={user?.name || "Anónimo"}
            description={user?.label}
            avatarProps={{
              src: `${user?.avatar_img}`,
            }}
          />
        </div>
  )
}

export default UserAvatarView