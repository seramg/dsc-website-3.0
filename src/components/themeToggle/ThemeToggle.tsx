"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./ThemeToggle.module.css";

const ThemeToggle = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      style={{
      }}
    >
      <input
        type="checkbox"
        id="theme-toggle"
        className={styles.input}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="theme-toggle" className={styles.label}>
        <Image
          src={isChecked ? "/images/moon.svg" : "/images/sun.svg"}
          height={26} // Set the height to match the label height
          width={26} // Set the width to match the label height
          alt="sun"
          className={styles.sun}
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            right: !isChecked ? "8px" : "auto",
            left: isChecked ? "8px" : "auto",
            transition: "right 0.3s, left 0.3s",
          }}
        />
      </label>
      <div className="background"></div>
    </div>
  );
};

export default ThemeToggle;
