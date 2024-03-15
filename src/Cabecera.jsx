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
import { Link } from "react-router-dom";

const Cabecera = () => {
  return (
    <Navbar isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <img src="\src\assets\marbid.svg" className="h-10" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <img src="\src\assets\marbid.svg" className="h-10" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end" className="flex gap-8">
        <NavbarItem>
          <Link to="/" color="foreground" className="text-md">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/" className="text-md">
            Explora
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link to="/" className="text-md">
            Log In
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            to="/"
            className="bg-blue-400 text-white px-5 py-2 rounded text-xl"
          >
            Sign Up
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <NavbarItem>
            <Link className="w-full">Inicio</Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="w-full">Explora</Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="w-full">Log In</Link>
          </NavbarItem>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default Cabecera;
