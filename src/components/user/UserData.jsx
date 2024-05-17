import { Tabs, Tab, Divider, Button,Image, avatar } from "@nextui-org/react";
import { CalendarDays, MessageCircleMore, SettingsIcon } from "lucide-react";
import { Avatar } from "@nextui-org/react";


const UserAvatar = ({ photoURL }) => (
  <Image
    src={photoURL}
    alt=""
    className="w-40 h-40 z-40 rounded-full -mt-10 border-4 border-white object-cover"
  />
);

const UserDetails = ({ userDB }) => {
  const userTag = userDB?.email.split("@")[0];
  const getCreatedAt = new Date(userDB?.createdAt).toLocaleDateString();

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
  <div className="flex flex-col justify-center items-center w-[full]">
   <Image src={userDB?.backround_img} radius="none"  alt="" className="w-screen h-60 object-cover	" />
      <UserAvatar photoURL={userDB?.avatar_img} />
      <UserDetails userDB={userDB} />
      <p className="text-xl mt-6 capitalize ">{userDB?.label}</p>
      <p className="max-w-[20em] md:max-w-[55em] capitalize ">
        {userDB?.description } </p>
      <UserActions internal={internal} openSetUser={openSetUser} />
    </div>
    <div className="flex flex-col items-center ">
      <Divider className="w-[80%] mt-10" />
      <UserTabs />
    </div>
  </>
);

export default UserData;