import {
  ArrowRightFromLine,
  ArrowLeftFromLine,
} from "lucide-react";
import { createContext, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import UserProfileCicleIcon from "../shared-componentes/icons/UserProfileCicleIcon";
const SidebarContext = createContext();

/**
 * Sidebar component that displays a navigation sidebar with expandable functionality.
 */
const Sidebar = ({ children }) => {
  const [expanded, setExpanded] = useState(false);
  const { currentUser: { userDB } } = useAuth();

  return (
    <aside className="h-screen">
      <nav className="h-full  flex flex-col bg-white dark:bg-[#1c1c1c] border-r dark:border-[#353842] shadow-sm  fixed z-[50]">
        <div className="p-4 pb-2 flex  items-center ">
          <Link to="/">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/marbid-69744.appspot.com/o/logos-icons%2Fmarbid.svg?alt=media&token=d7d1cd99-faf3-4542-84bf-ea24fbb8f025 "
              className={`overflow-hidden transition-all ${expanded ? "w-10 mr-5" : "w-0"
                }`}
              alt=""
            />
          </Link>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 "
          >
            {expanded ? <ArrowLeftFromLine /> : <ArrowRightFromLine />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          {/* z-index para el hover y que no se quede bajo de los inputs */}
          <ul className="flex-1 px-3 z-50" onClick={() => { setExpanded(false) }}>{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t dark:border-[#353842]  flex p-3">
          {!expanded &&
            <Link to="profile" className="ml-1">
              <UserProfileCicleIcon src={userDB?.avatar_img} size={8} />
            </Link>
          }
          <Link to="profile">
            <div
              className={`
          flex justify-between items-center
          overflow-hidden gap-5 transition-all ${expanded ? "w-58 ml-3" : "w-0"}`}
            >
              <div className="leading-4">
                <h4 className="font-semibold">{userDB?.name || "Marbid User"}</h4>
                <span className="text-xs text-gray-600 dark:text-white">
                  {userDB?.email || "loading@email.com"}
                </span>
              </div>
              <UserProfileCicleIcon src={userDB?.avatar_img} size={8} />
            </div>
          </Link>
        </div>

      </nav>
    </aside>
  );
};

export default Sidebar;
export { SidebarContext };
