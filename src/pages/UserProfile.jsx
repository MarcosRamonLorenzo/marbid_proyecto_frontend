import {useState} from "react";
import useAuth from "@/hooks/useAuth";
import UserData from "@/components/user/UserData";
import UserSetInfoModal from "@/components/user/UserSetInfoModal";

const UserProfile = ({internal}) => {
  const {  currentUser:{userDB} } = useAuth();

  const [serPopUp, setUserPopUp] = useState(false);

  return (
    <div className="user-profile h-screen">
      <div className="mb-10 lg:mb-20 ">
        <UserData  userDB={userDB} openSetUser={()=>{setUserPopUp(true)}} internal />
      </div>
      {internal && <UserSetInfoModal isOpen={serPopUp} onClose={() => setUserPopUp(false)}  />}
    </div>
  );
};

export default UserProfile;
