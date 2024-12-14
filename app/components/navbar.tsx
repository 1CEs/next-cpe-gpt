import { Navbar as Nav, NavbarBrand, NavbarContent, NavbarItem, Link, Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Badge, Chip, Button, Popover, PopoverContent, PopoverTrigger, Divider } from "@nextui-org/react";
import React from "react";
import Logo from "./logo";
import useUserStore from "@/store/user.store";
import { signOut } from "next-auth/react";
import { IcBaselineInfo, LetsIconsSignOutSqureFill } from "./icon";

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
              <DropdownItem className="cursor-default" key="copy" isReadOnly>
                <div className="flex justify-between w-full items-center">
                  <span>token usage</span>
                  <Popover size="lg" placement="right">
                    <PopoverTrigger>
                      <span className="text-sm cursor-pointer"><IcBaselineInfo width={15} height={15} /></span>
                    </PopoverTrigger>
                    <PopoverContent>
                      <div className="px-1 py-2 w-[150px]">
                        <div className="text-small font-bold text-center pb-2">Usage Tracker</div>
                        <div className="text-tiny flex justify-between">
                          <span>Prompt Token</span>
                          <span className="text-success">{user?.token_usage?.prompt_token}</span>
                        </div>
                        <div className="text-tiny flex justify-between">
                          <span>Completion Token</span>
                          <span className="text-success">{user?.token_usage?.completion_token}</span>
                        </div>
                        <div className="text-tiny flex justify-between">
                          <span>Cost</span>
                          <span className="text-danger">${user?.token_usage?.cost}</span>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
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