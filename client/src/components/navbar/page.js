import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { AcmeLogo } from "./logo.js";

export default function App() {
  return (
    <Navbar className=" dark text-white py-3 bg-transparent  ">
      <NavbarBrand>
        <AcmeLogo className="text-5xl" />
        <p className="font-bold text-4xl bg-gradient-to-r from-cyan-500 via-cyan-700 to-cyan-900 text-transparent bg-clip-text">
          Just_Talk
        </p>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex text-3xl">
          <Link href="#" className="text-3xl text-white">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="flat"
            className="text-3xl text-white"
          >
            Register
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
