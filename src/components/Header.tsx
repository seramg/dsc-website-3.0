"use client";
import React from "react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import Navbar from "./Navbar";
import { SideBar } from "./SideBar";
import { useState, useEffect } from "react";
import useIsSmallScreen from "./hooks/useIsSmallScreen";

const Header = () => {
  const isSmallScreen = useIsSmallScreen();

  return (
    <div className="p-12 h-76 bg-backgroundPrimary flex justify-between items-center h-[72px]">
      <Image
        src="/images/logo.svg" // Route of the image file
        width={0}
        height={0}
        priority
        alt="logo"
        className="w-auto	h-auto"
      />
      <ThemeToggle />
      {isSmallScreen ? <SideBar /> : <Navbar />}
    </div>
  );
};

export default Header;
