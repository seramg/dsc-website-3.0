import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import ReusableContextMenu from "./ui/reusable-context-menu";

const ToggleButton = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if theme is already set in local storage
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme && storedTheme !== "system") {
      setIsDarkMode(storedTheme === "dark");
    } else {
      // If no theme is stored, set initial theme based on system theme
      setIsDarkMode(systemTheme === "dark");
    }
  }, [systemTheme, theme]);

  const toggleTheme = (newMode?: boolean) => {
    // Toggle between light and dark mode
    const updatedMode = newMode !== undefined ? newMode : !isDarkMode;

    setIsDarkMode(updatedMode);

    // Save the theme preference in local storage
    localStorage.setItem("theme", updatedMode ? "dark" : "light");

    // Set the theme based on the current mode
    setTheme(updatedMode ? "dark" : "light");
  };

  const resetTheme = () => {
    // Reset the theme preference in local storage
    localStorage.removeItem("theme");
    setTheme("system");
    setIsDarkMode(systemTheme === "dark");
  };

  if (isDarkMode === null) {
    // Display a loading indicator while determining the initial theme
    return <div>Loading...</div>;
  }

  return (
    <ReusableContextMenu
      items={[
        {
          name: "Dark Theme",

          onClick: () => toggleTheme(true),
        },
        {
          name: "Light Theme",
          onClick: () => toggleTheme(false),
        },
        {
          name: "System Theme",
          onClick: resetTheme,
        },
      ]}
    >
      <div
        className={`flex p-1 bg-backgroundEmPrimary dark:bg-blue-600 justify-between items-center w-16 rounded-2xl cursor-pointer`}
        onClick={() => toggleTheme()}
      >
        <div
          className={`rounded-full w-4 h-4 bg-white dark border border-onBackgroundSecondary transition-transform ${
            isDarkMode ? "transform translate-x-8" : ""
          }`}
        ></div>

        <Image
          src={isDarkMode ? "/images/moon.svg" : "/images/sun.svg"}
          width={0}
          height={0}
          alt={isDarkMode ? "moon" : "sun"}
          className={`w-auto h-auto transition-transform ${
            isDarkMode ? "transform -translate-x-8" : ""
          }`}
        />
      </div>
    </ReusableContextMenu>
  );
};

export default ToggleButton;
