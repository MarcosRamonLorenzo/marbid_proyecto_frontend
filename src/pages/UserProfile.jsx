import React from "react";
import useAuth from "@/hooks/useAuth";
import UserData from "@/components/user/UserData";

const UserProfile = ({internal}) => {
  const { currentUser, currentUser:{userDB} } = useAuth();

  {internal && console.log("internal", internal)}



  return (
    <div className="h-screen">
      <div className="mb-10 lg:mb-20 ">
        <img src="https://pbs.twimg.com/profile_banners/44196397/1690621312" alt="" className="w-screen h-60 object-cover	" />
        <UserData userFireBase={currentUser} userDB={userDB} internal />
      </div>
    </div>
  );
};

export default UserProfile;
