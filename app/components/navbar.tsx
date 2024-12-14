import { Navbar as Nav, NavbarBrand, NavbarContent, NavbarItem, Link, Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Badge, Chip } from "@nextui-org/react";
import React from "react";
import Logo from "./logo";
import useUserStore from "@/store/user.store";
import { signOut } from "next-auth/react";
import { LetsIconsSignOutSqureFill } from "./icon";

const Navbar: React.FC = () => {
  const { user, setUser } = useUserStore()
  const signOutHandler = async () => {
    try {
      setUser(null)
      await signOut({
        redirectTo: '/'
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Nav>
      <NavbarBrand>
        <Logo width={30} height={30} textSize="1" />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link className="text-white" href="#">
            Overview
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Dropdown className="bg-gray-900 " size="lg">
            <DropdownTrigger className="cursor-pointer">
              <Avatar size="sm" src={user?.image} />
            </DropdownTrigger>
            <DropdownMenu className="text-white" aria-label="Static Actions">
              <DropdownItem key="new">
                <div className="flex gap-x-3 items-center">
                  <Avatar size="sm" src={user?.image} />

                  <div className="flex flex-col">
                    <span className="text-lg">{user?.name}</span>
                    <span className="text-tiny text-gray-400">{user?.email}</span>
                  </div>
                </div>
              </DropdownItem>
              <DropdownItem key="copy">
                <div className="flex justify-between w-full">
                  <span>token usage</span>
                  <span className="text-success">{user?.token_usage}</span>
                </div>
              </DropdownItem>
              <DropdownItem key="edit">
                <div className="flex flex-wrap gap-x-1">
                  <Chip size="sm">{user?.role}</Chip>
                  <Chip size="sm">{user?.status}</Chip>
                </div>
              </DropdownItem>
              <DropdownItem startContent={<LetsIconsSignOutSqureFill />} key="delete" className="text-danger" onPress={signOutHandler} color="danger">
                Sign Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>
    </Nav>
  );
}

export default Navbar