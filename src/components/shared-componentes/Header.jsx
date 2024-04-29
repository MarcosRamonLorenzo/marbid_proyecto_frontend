import React from "react";
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
import { doSignOut } from "@/firebase/authFunc";
import { useModal } from "@/hooks/useModal";
import ModalComponent from "@/components/shared-componentes/modals/ModalComponent";

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
  const { isLogin } = useAuth();
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <Navbar isBordered className="dark:bg-[#1c1c1c]">
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle />
        </NavbarContent>

        {/* desktop menu */}
        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <Link to={"/"}>
              <img src="\src\assets\marbid.svg" className="h-10" />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarBrand>
            <Link to={"/"}>
              <img src="\src\assets\logoMarbidWeb.webp" className="h-8" />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent justify="end" className="flex gap-8">
          <NavItem to="/">Inicio</NavItem>
          <NavItem to="/explora">Explora</NavItem>
          {isLogin ? (
            <>
              <NavItem to="/panelControl">Panel de Control</NavItem>
              <NavItem>
                <p onClick={() => {openModal(true) }}>Log Out</p>
              </NavItem>
            </>
          ) : (
            <>
              <NavItem to="/log-in">Log In</NavItem>
              <NavItem to="/sign-up">Sign Up</NavItem>
            </>
          )}
        </NavbarContent>

        {/* mobile menu */}
        <NavbarMenu>
          <NavMenuItem to="/">Inicio</NavMenuItem>
          <NavMenuItem to="/explora">Explora</NavMenuItem>
          {isLogin ? (
            <>
              <NavMenuItem to="/panelControl">Panel de Control</NavMenuItem>
              <NavMenuItem>
              <p onClick={() => {openModal(true) }}>Log Out</p>
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

      <ModalComponent
        isOpen={isOpen}
        onClose={closeModal}
        title="Cerrar Sesión"
        text="¿Estás seguro de que deseas cerrar sesión?"
        onConfirm={() => {
          doSignOut();
        }}
      />
    </>
  );
};

export default Header;
