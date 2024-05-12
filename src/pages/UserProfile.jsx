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
    // If the 'internal' prop is true, this means we are dealing with the currently logged-in user
    if (internal) {
      // If there is no currently logged-in user
      if (!currentUser && !isLogin) {
        // Set 'notFound' to true and 'loading' to false
        setNotFound(true);
        setLoading(false);
        return;
      }
      // If there is a currently logged-in user, set 'userDB' to the user data of the currently logged-in user
      setUserDB(currentUser.userDB);
      setLoading(false);
    } else {
      // If the 'internal' prop is false, this means we are dealing with a different user.
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
  }, [internal, idUser, currentUser]);

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