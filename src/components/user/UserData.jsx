import { Tabs, Tab, Divider, Button, Image, avatar } from "@nextui-org/react";
import { CalendarDays, MessageCircleMore, SettingsIcon } from "lucide-react";
import { formatDate } from "@/functions/timeFunc";
import useDataFetch from "@/hooks/useDataFetch";
import CreatedServicesList from "../services/CreatedServicesList";
import apiUrl from "@/config/apis.config";
import UserCommentsList from "../comments/UserCommentsList";
import { useState } from "react";

const UserAvatar = ({ photoURL }) => (
  <Image
    src={photoURL}
    alt=""
    className="w-40 h-40 z-40 rounded-full -mt-10 border-4 border-white object-cover"
  />
);

const UserDetails = ({ userDB }) => {
  const userTag = userDB?.email.split("@")[0];
  const getCreatedAt = formatDate(userDB?.createdAt);

  return (
    <div className="flex flex-col items-center gap-1">
      <h1 className=" text-xl md:text-2xl font-bold">{userDB?.name}</h1>
      <p className="text-gray-500">@{userTag}</p>
      <div className="flex gap-2 justify-center">
        <p className="text-gray-500">Usuario creado el {getCreatedAt}</p>
        <CalendarDays className="w-4" />
      </div>
      {userDB?.country && (
        <div className="flex justify-center gap-2 ">
          <p className="text-gray-500 capitalize">{userDB.country}</p>
        </div>
      )}
    </div>
  );
};

const UserActions = ({ internal, openSetUser, userDB }) => {
  
  const [to, setTo] = useState(userDB?.email || ''); // Asumiendo que `userDB` contiene el email del usuario

  const handleContactClick = () => {
    const subject = 'Marbid';
    const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      {!internal && (
        <Button
          radius="sm"
          className="mt-5 primary-color-class text-white py-0 px-10"
          startContent={
            <MessageCircleMore size={20} color="#ffffff" strokeWidth={2} />
          }
          onClick={handleContactClick}
        >
          Contactar
        </Button>
      )}
      {internal && (
        <Button
          radius="sm"
          className="mt-5 secondary-color-class text-white py-0 px-10"
          startContent={
            <SettingsIcon size={20} color="#ffffff" strokeWidth={2} />
          }
          onClick={openSetUser}
        >
          Editar Perfil
        </Button>
      )}
    </>
  );
};

const UserTabs = ({ idUser }) => {
  const { data, isLoading } = useDataFetch(
    `services-${idUser}`,
    `${apiUrl}/service/created/${idUser}`
  );
  return (
    <Tabs aria-label="Options" variant="underlined">
      <Tab key="created-ofers" title="Servicios Creados">
          <CreatedServicesList
            createdServices={data}
            isLoading={isLoading}
            className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"}
            />
      </Tab>
      <Tab key="like-ofers" title="Comentarios">
       <UserCommentsList className={""} />
      </Tab>
    </Tabs>
  );
};

const UserData = ({ userDB, internal, openSetUser }) => (
  <>
    <div className="flex flex-col justify-center items-center w-[full]">
      <Image
        src={userDB?.backround_img}
        radius="none"
        alt=""
        className="w-screen h-60 object-cover	"
      />
      <UserAvatar photoURL={userDB?.avatar_img} />
      <UserDetails userDB={userDB} />
      <p className="text-xl mt-6 capitalize ">{userDB?.label}</p>
      <p className="max-w-[20em] md:max-w-[55em] capitalize ">
        {userDB?.description}{" "}
      </p>
      <UserActions internal={internal} openSetUser={openSetUser} userDB={userDB} />
    </div>
    <div className="flex flex-col items-center ">
      <Divider className="w-[80%] mt-10" />
      <UserTabs idUser={userDB?.id} />
    </div>
  </>
);

export default UserData;
