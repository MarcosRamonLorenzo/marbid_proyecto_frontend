import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import { createContext, useState } from "react";
import { UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
const SidebarContext = createContext();

/**
 * Sidebar component that displays a navigation sidebar with expandable functionality.
 */
const Sidebar = ({ children }) => {
  const [expanded, setExpanded] = useState(false);
  const { user } = useUser();

  return (
    <aside className="h-screen">
      <nav
        className={
          expanded
            ? "h-full  flex flex-col bg-white border-r shadow-sm  fixed md:static z-20"
            : "h-full  flex flex-col bg-white border-r shadow-sm z-20 "
        }
      >
        <div className="p-4 pb-2 flex  items-center">
          <Link to="/">
            <img
              src="/src/assets/marbid.svg "
              className={`overflow-hidden transition-all ${
                expanded ? "w-10 mr-5" : "w-0"
              }`}
              alt=""
            />
          </Link>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 "
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          {/* z-index para el hover y que no se quede bajo de los inputs */}
          <ul className="flex-1 px-3 z-50">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <UserButton afterSignOutUrl="/" />
          <div
            className={`
          flex justify-between items-center
          overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
      `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">
                {user && user.firstName}
                {/* Accediendo al nombre del usuario */}
              </h4>
              <span className="text-xs text-gray-600">
                {user && user.email}
              </span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
export { SidebarContext };
