import React, { useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { Link, useNavigate } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  SignUpButton,
  useUser,
} from "@clerk/clerk-react";

const Cabecera = () => {
  const { isLoaded, user } = useUser();

  return (
    <Navbar isBordered className="dark:bg-[#1c1c1c]">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

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
            <img src="\src\assets\marbid.svg" className="h-10" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end" className="flex gap-8">
        <NavbarItem>
          <Link to="/" color="foreground" className="text-md hidden sm:block">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/explora" className="text-md hidden sm:block">
            Explora
          </Link>
        </NavbarItem>
        {isLoaded && user && (
          <NavbarItem>
            <Link
              to="/panelControl"
              color="foreground"
              className="text-md hidden sm:block"
            >
              Panel de Control
            </Link>
          </NavbarItem>
        )}
        <NavbarItem className="text-md">
          <div>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </NavbarItem>
        <NavbarItem>
          <SignedOut>
            <SignUpButton className="inline-block py-1 px-6 rounded-l-xl rounded-t-xl bg-[#7747FF] hover:bg-white hover:text-[#7747FF] focus:text-[#7747FF] focus:bg-gray-200 text-gray-50 font-bold leading-loose transition duration-200" />
          </SignedOut>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <NavbarItem>
            <Link className="w-full">Inicio</Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/explora" className="w-full">
              Explora
            </Link>
          </NavbarItem>
          {isLoaded && user && (
            <NavbarItem>
              <Link to="/panelControl" className="w-full">
                Panel de Control
              </Link>
            </NavbarItem>
          )}
          <NavbarItem>
            <div>
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn />
            </div>
          </NavbarItem>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default Cabecera;
