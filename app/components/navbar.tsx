import {Navbar as Nav, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import React from "react";

export const CpeGptLogo = () => {
    return (
      <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
        <path
          clipRule="evenodd"
          d="M16 2C8.82 2 3 7.82 3 15C3 22.18 8.82 28 16 28C23.18 28 29 22.18 29 15C29 7.82 23.18 2 16 2ZM16 25.6C10.48 25.6 6.4 21.52 6.4 16C6.4 10.48 10.48 6.4 16 6.4C21.52 6.4 25.6 10.48 25.6 16C25.6 21.52 21.52 25.6 16 25.6ZM18 11C18.55 11 19 11.45 19 12V20C19 20.55 18.55 21 18 21H14C13.45 21 13 20.55 13 20V12C13 11.45 13.45 11 14 11H18ZM17 13H15V19H17V13ZM16 8C16.55 8 17 8.45 17 9C17 9.55 16.55 10 16 10C15.45 10 15 9.55 15 9C15 8.45 15.45 8 16 8Z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </svg>
    )
}
  
const Navbar:React.FC = () => {
  return (
    <Nav>
      <NavbarBrand>
        <CpeGptLogo />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" href="#">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Nav>
  );
}

export default Navbar