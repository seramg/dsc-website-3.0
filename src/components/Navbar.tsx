import Link from "next/link";
import React from "react";
import Button from "./Button";
import { Body } from "./type-styles";

interface NavbarProps {
  className?: string;
  isCol?: boolean;
}

const Navbar = ({ isCol = false, className }: NavbarProps) => {
  return (
    <div
      className={`flex ${
        !isCol ? "justify-end" : "flex-col justify-between h-full"
      } gap-2 items-center overflow-hidden ${className}`}
    >
      <div
        className={`buttonContainer flex ${
          !isCol ? "" : "flex-col"
        } justify-center items-center`}
      >
        <NavbarItem href="/about">Who we are</NavbarItem>
        <NavbarItem href="/events">Events</NavbarItem>
        <NavbarItem href="/resources">Resources</NavbarItem>
        <NavbarItem href="/contributors">Contributors</NavbarItem>
      </div>
      <div
        className={`buttonContainer flex ${
          !isCol ? "" : "flex-col w-full"
        }  justify-center items-center gap-2`}
      >
        <Button className={`${isCol ? "w-full" : ""}`} variant="secondary">
          Sign In
        </Button>
        <Button className={`${isCol ? "w-full" : ""}`}>Join us</Button>
      </div>
    </div>
  );
};

interface NavbarItemProps {
  children: React.ReactNode;
  href: string;
}

function NavbarItem({ children, href }: NavbarItemProps) {
  return (
    <Link
      className="menu-item p-2 hover:text-onBackgroundEmPrimary"
      href={href}
    >
      <Body>{children}</Body>
    </Link>
  );
}

export default Navbar;
