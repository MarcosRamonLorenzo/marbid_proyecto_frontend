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

const Header = () => {
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
            <img src="\src\assets\logoMarbidWeb.webp" className="h-8" />
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

        <NavbarItem>
          <Link
            to="/panelControl"
            color="foreground"
            className="text-md hidden sm:block"
          >
            Panel de Control
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link className="w-full" to="/">
            Inicio
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link to="/explora" className="w-full">
            Explora
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link to="/panelControl" className="w-full">
            Panel de Control
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
