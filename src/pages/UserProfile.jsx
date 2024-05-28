import { useEffect, useState } from "react";
import useAuth from "@/hooks/useAuth";
import UserData from "@/components/user/UserData";
import UserSetInfoModal from "@/components/user/UserSetInfoModal";
import { useParams } from "react-router-dom";
import { getUserDB } from "@/functions/authFunc";
import Loading from "@/components/shared-componentes/Loadings/Loading";
import NotFound from "./NotFound";
import Header from "@/components/shared-componentes/Header";

const UserProfile = ({ internal }) => {
  // States  variable for user own page.
  const { currentUser, isLogin } = useAuth();
  const [userDB, setUserDB] = useState(null);
  const [serPopUp, setUserPopUp] = useState(false);
  

  // Get the user ID from the URL parameters for other users page.
  const { idUser } = useParams();
  
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const fetchUser = async () => {
    if (internal) {
      if (!currentUser && !currentUser.userDB && !isLogin) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      setUserDB(currentUser.userDB);
      setLoading(false);
    } else {
      const fetchedUser = await getUserDB(idUser);
      if (!fetchedUser) {
        setNotFound(true);
      } else {
        setUserDB(fetchedUser);
      }
      
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [ currentUser]);

  if (loading) {
    return <Loading />
  }

  if (notFound) {
    return <NotFound />
  }

  return (
    <>
      <div className="user-profile h-screen">
        {!internal && <Header />}
        <div className="mb-10 lg:mb-20 ">
          <UserData userDB={userDB} openSetUser={() => { setUserPopUp(true) }} internal={internal} />
        </div>
        {internal && <UserSetInfoModal isOpen={serPopUp} onClose={() => setUserPopUp(false)} />}
      </div>
    </>
  );
};

export default UserProfile;