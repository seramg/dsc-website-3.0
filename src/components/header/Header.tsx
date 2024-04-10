"use client";
import React from "react";
import Image from "next/image";
import ThemeToggle from "../themeToggle/ThemeToggle";
import Navbar from "../navbar/Navbar";
import { SideBar } from "../sideBar/SideBar";
import { useState, useEffect } from "react";

const Header = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Function to check if the screen size is small
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    // Add event listener to resize event
    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    // Clean up the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="p-12 h-76 bg-white flex justify-between items-center">
      <Image
        src="/images/logo.svg" // Route of the image file
        height={26} // Desired size with correct aspect ratio
        width={226} // Desired size with correct aspect ratio
        alt="logo"
      />
        <ThemeToggle />
      {isSmallScreen ? <SideBar /> : <Navbar />}
    </div>
  );
};

export default Header;
