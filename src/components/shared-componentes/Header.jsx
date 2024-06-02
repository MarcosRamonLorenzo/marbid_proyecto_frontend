import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import useAuth from "@/hooks/useAuth";
import { Link } from "react-router-dom";
import { useModal } from "@/hooks/useModal";
import ModalAcceptCancel from "@/components/shared-componentes/modals/ModalAcceptCancel";
import "./scss/Header.scss";

const NavItem = ({ to, children }) => (
  <NavbarItem>
    <Link to={to} color="foreground" className="text-md hidden sm:block">
      {children}
    </Link>
  </NavbarItem>
);

const NavMenuItem = ({ to, children }) => (
  <NavbarMenuItem>
    <Link to={to} className="w-full">
      {children}
    </Link>
  </NavbarMenuItem>
);

const Header = () => {
  const { isLogin, handleSignOut } = useAuth();
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div className="headerPrincipalDiv">
      <Navbar isBordered className="dark:bg-[#1c1c1c]">
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle className="dark:text-white" />
        </NavbarContent>

        {/* desktop menu */}
        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <Link to={"/"}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/marbid-69744.appspot.com/o/logos-icons%2Fmarbid.svg?alt=media&token=d7d1cd99-faf3-4542-84bf-ea24fbb8f025"
                className="h-10"
              />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarBrand>
            <Link to={"/"}>
              {localStorage.getItem("theme") === "dark" ? (
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/marbid-69744.appspot.com/o/logos-icons%2FmarbidLight.webp?alt=media&token=fc217944-08ac-431b-a40d-7e5b51beed75"
                  className="h-8"
                />
              ) : (
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/marbid-69744.appspot.com/o/logos-icons%2FlogoMarbidWeb.webp?alt=media&token=3522c0e5-6a6a-415a-90c1-2c7782ecfe7a"
                  className="h-8"
                />
              )}
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent justify="end" className="flex gap-8">
          <NavItem to="/">Inicio</NavItem>
          <NavItem to="/explora">Explora</NavItem>
          {isLogin ? (
            <>
              <NavItem to="/panel-control">Panel de Control</NavItem>
              <NavItem>
                <p
                  onClick={() => {
                    openModal(true);
                  }}
                >
                  Log Out
                </p>
              </NavItem>
            </>
          ) : (
            <>
              <NavItem to="/log-in">
                <p>Log In</p>
              </NavItem>
              <NavItem to="/sign-up">
                <p>Sign Up</p>
              </NavItem>
            </>
          )}
        </NavbarContent>

        {/* mobile menu */}
        <NavbarMenu>
          <NavMenuItem to="/">Inicio</NavMenuItem>
          <NavMenuItem to="/explora">Explora</NavMenuItem>
          {isLogin ? (
            <>
              <NavMenuItem to="/panel-control">Panel de Control</NavMenuItem>
              <NavMenuItem>
                <p
                  onClick={() => {
                    openModal(true);
                  }}
                >
                  Log Out
                </p>
              </NavMenuItem>
            </>
          ) : (
            <>
              <NavMenuItem to="/log-in">Log In</NavMenuItem>
              <NavMenuItem to="/sign-up">Sign Up</NavMenuItem>
            </>
          )}
        </NavbarMenu>
      </Navbar>

      <ModalAcceptCancel
        isOpen={isOpen}
        onClose={closeModal}
        title="Cerrar Sesión"
        text="¿Estás seguro de que deseas cerrar sesión?"
        onConfirm={() => {
          handleSignOut();
        }}
      />
    </div>
  );
};

export default Header;
