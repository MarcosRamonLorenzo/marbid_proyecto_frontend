import {useState} from "react";
import useAuth from "@/hooks/useAuth";
import UserData from "@/components/user/UserData";
import UserSetInfoModal from "@/components/user/UserSetInfoModal";

const UserProfile = ({internal}) => {
  const { currentUser, currentUser:{userDB} } = useAuth();

  const [serPopUp, setUserPopUp] = useState(false);



  return (
    <div className="h-screen">
      <div className="mb-10 lg:mb-20 ">
        <img src="https://pbs.twimg.com/profile_banners/44196397/1690621312" alt="" className="w-screen h-60 object-cover	" />
        <UserData  userDB={userDB} openSetUser={()=>{setUserPopUp(true)}} internal />
      </div>
      {internal && <UserSetInfoModal isOpen={serPopUp} onClose={() => setUserPopUp(false)} />}
    </div>
  );
};

export default UserProfile;
