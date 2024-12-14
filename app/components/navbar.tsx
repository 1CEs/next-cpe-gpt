import { Navbar as Nav, NavbarBrand, NavbarContent, NavbarItem, Link, Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import React from "react";
import Logo from "./logo";
import useUserStore from "@/store/user.store";

const Navbar: React.FC = () => {
  const { user } = useUserStore()
  console.log(user)
  return (
    <Nav>
      <NavbarBrand>
        <Logo width={30} height={30} textSize="1" />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link className="text-white" href="#">
            Features
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Avatar src={user?.image} />
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="new">New file</DropdownItem>
              <DropdownItem key="copy">Copy link</DropdownItem>
              <DropdownItem key="edit">Edit file</DropdownItem>
              <DropdownItem key="delete" className="text-danger" color="danger">
                Delete file
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>
    </Nav>
  );
}

export default Navbar