import React from "react";
import { Tabs, Tab, Divider, Button } from "@nextui-org/react";
import { CalendarDays, MessageCircleMore, SettingsIcon } from "lucide-react";
import { Avatar } from "@nextui-org/react";

const UserAvatar = ({ photoURL }) => (
  <img
    src={photoURL}
    alt=""
    className="w-40 h-40 rounded-full -mt-10 border-4 border-white object-cover"
  />
);

const UserDetails = ({ userDB }) => {
  const userTag = userDB?.email.split("@")[0];
  const getCreatedAt = new Date(userDB?.createdAt).toLocaleDateString();

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">{userDB?.name}</h1>
      <p className="text-gray-500">@{userTag}</p>
      <div className="flex gap-2 justify-center">
        <p className="text-gray-500">Usuario creado el {getCreatedAt}</p>
        <CalendarDays className="w-4" />
      </div>
      {userDB?.country && (
        <div>
          <p className="text-gray-500">{userDB.country}</p>
          <Avatar
            className="w-6 h-6"
            src={`https://flagcdn.com/${userDB.country[0] + userDB.country[1]}.svg`}
          />
        </div>
      )}
    </div>
  );
};

const UserActions = ({ internal, openSetUser }) => (
  <>
    {!internal && (
      <Button
        radius="sm"
        className="mt-5 primary-color-class text-white py-0 px-10"
        startContent={
          <MessageCircleMore size={20} color="#ffffff" strokeWidth={2} />
        }
      >
        Contactar
      </Button>
    )}
    {internal && (
      <Button
        radius="sm"
        className="mt-5 secondary-color-class text-white py-0 px-10"
        startContent={<SettingsIcon size={20} color="#ffffff" strokeWidth={2} />}
        onClick={openSetUser}
      >
        Editar Perfil
      </Button>
    )}
  </>
);

const UserTabs = () => (
  <Tabs aria-label="Options" variant="underlined">
    <Tab key="created-ofers" title="Servicios Creados">
      Este usuario no ha publicado servicios
    </Tab>
    <Tab key="like-ofers" title="Comentarios">
      Este usuario no ha comentado
    </Tab>
  </Tabs>
);

const UserData = ({ userDB, internal, openSetUser }) => (
  <>
    <div className="flex flex-col justify-center items-center">
      <UserAvatar photoURL={userDB?.avatar_img} />
      <UserDetails userDB={userDB} />
      <p className="text-xl mt-6">{userDB?.label || "Usuario de Marbid"}</p>
      <p className="w-[20em] md:w-[55em] mt-3">
        {userDB?.decription ||
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt laboriosam aperiam laborum nihil odio fugiat earum quisquam, omnis repudiandae sit vel provident quo dolor similique rerum eum, unde dolorem dolorum?"}
      </p>
      <UserActions internal={internal} openSetUser={openSetUser} />
    </div>
    <div className="flex flex-col items-center">
      <Divider className="w-11/12 mt-10" />
      <UserTabs />
    </div>
  </>
);

export default UserData;