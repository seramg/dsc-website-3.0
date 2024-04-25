"use client";

import React from "react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import Navbar from "./Navbar";
import { SideBar } from "./SideBar";
import useIsSmallScreen from "./hooks/useIsSmallScreen";
import Link from "next/link";

import { useTheme } from "next-themes";
import useResultantTheme from "./hooks/useResultantTheme";
import MarqueeContainer from "./MarqueeContainer";

const Header = () => {
  const isSmallScreen = useIsSmallScreen();
  const resultantTheme = useResultantTheme();

  return (
    <div className="top-0 z-10">
      <MarqueeContainer />
      <div className="z-[1] h-76 bg-backgroundPrimary grid grid-cols-12 p-x-4 items-center min-h-[72px] py-4 top-0">
        <div className="flex gap-8 !col-start-2 col-span-4 lg:col-span-4">
          <Link href={"/"}>
            {isSmallScreen ? (
              <Image
                src={
                  resultantTheme == "light"
                    ? "/assets/logos/gdsc-standalone-logo.svg"
                    : "/assets/logos/gdsc-standalone-logo-dark.svg"
                } // Route of the image file
                width={48}
                height={48}
                priority
                alt="logo"
              />
            ) : (
              <Image
                src={
                  resultantTheme == "light"
                    ? "/assets/logos/gdsc-horizontal-logo.svg"
                    : "/assets/logos/gdsc-horizontal-logo-dark.svg"
                } // Route of the image file
                width={0}
                height={0}
                priority
                alt="logo"
                className="w-auto	h-auto"
              />
            )}
          </Link>
          {!isSmallScreen && <ThemeToggle />}
        </div>

        {isSmallScreen && (
          <div className="toggleContainer col-span-2 flex items-center justify-center">
            <ThemeToggle />
          </div>
        )}

        {isSmallScreen ? (
          <div className="sidebarContainer col-end-12 col-span-4 flex items-center justify-end">
            <SideBar />
          </div>
        ) : (
          <Navbar className="col-start-8 col-span-4 lg:col-span-6 lg:col-start-6 justify-end" />
        )}
      </div>
    </div>
  );
};

export default Header;
