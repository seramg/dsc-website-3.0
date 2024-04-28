"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import Navbar from "./Navbar";
import { SideBar } from "./SideBar";
import useIsSmallScreen from "./hooks/useIsSmallScreen";
import Link from "next/link";
import useResultantTheme from "./hooks/useResultantTheme";
import MarqueeContainer from "./MarqueeContainer";
import { useSpring, animated } from "@react-spring/web";

const Header = () => {
  const isSmallScreen = useIsSmallScreen();
  const resultantTheme = useResultantTheme();
  const theme = useResultantTheme();
  const [sunMoonRotation, setSunMoonRotation] = useState(0);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  let rotateAnimationProps = useSpring({
    config: {
      duration: 400,
      mass: 5,
      friction: 120,
      tension: 120,
    },
    delay: 100,
    rotate: `${sunMoonRotation}turn`,
  });
  const mobileFinalPos = 12;
  const desktopFinalPos = -44;
  const desktopInitialPos = -200;
  const mobileInitialPos = -300;

  const [showAnimationProps, showAnimationApi] = useSpring(
    () => ({
      from: { top: `-${isSmallScreen ? 200 : 300}px` },
      to: [{ top: `${isSmallScreen ? mobileFinalPos : desktopFinalPos}px` }],
      config: {
        duration: 200,
        mass: 5,
        friction: 120,
        tension: 120,
      },
    }),
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop && scrollTop > 120) {
        setHeaderTop(-120);
      } else {
        setHeaderTop(0);
      }
      setLastScrollTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  useEffect(() => {
    const playShowAnimation = () => {
      showAnimationApi.start({
        from: {
          top: `${isSmallScreen ? mobileInitialPos : desktopFinalPos}px`,
        },
        to: { top: `${isSmallScreen ? mobileFinalPos : desktopFinalPos}px` },
      });
      showAnimationApi.start({
        from: { top: `${isSmallScreen ? mobileFinalPos : desktopFinalPos}px` },
        to: {
          top: `${isSmallScreen ? mobileInitialPos : desktopInitialPos}px`,
        },
        delay: 1500,
      });
    };

    if (theme == "light") {
      if (sunMoonRotation % 1 != 0) {
        setSunMoonRotation((s) => s + 0.5);
        playShowAnimation();
      }
    } else {
      if (sunMoonRotation % 1 == 0) {
        setSunMoonRotation((s) => s + 0.5);
        playShowAnimation();
      }
    }
  }, [showAnimationApi, sunMoonRotation, theme]);

  return (
    <div
      style={{ top: headerTop }}
      className="fixed left-0 w-full z-10 transition-[top] duration-500"
    >
      <MarqueeContainer />
      <div className="z-[1] h-76 bg-backgroundPrimary grid grid-cols-12 p-x-4 items-center min-h-[72px] py-4 top-0">
        <animated.img
          style={{
            transform: "translateX(-50%)",
            ...rotateAnimationProps,
            ...showAnimationProps,
          }}
          className="absolute -z-20 left-1/2"
          src="/images/sun-moon-comp.svg"
          width={isSmallScreen ? 200 : 300}
          height={isSmallScreen ? 200 : 300}
          alt="sunmooncomponent"
        />
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
