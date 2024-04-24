import React from "react";
import { Button as ButtonComponent } from "./ui/button";
import { Body } from "./type-styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  highlightColor?: string;
}

export default function Button({
  variant = "primary",
  highlightColor,
  ...props
}: ButtonProps) {
  return (
    <ButtonComponent
      className={`rounded-full ${
        variant === "primary" ? "bg-backgroundInversePrimary" : "bg-transparent"
      } ${
        variant === "primary"
          ? "text-onBackgroundInversePrimary"
          : "text-onBackgroundPrimary"
      }
      ${
        variant === "primary"
          ? "border-none"
          : "border border-onBackgroundPrimary"
      }
      ${
        variant === "primary"
          ? "hover:bg-onBackgroundEmPrimary"
          : `hover:bg-white/50 dark:hover:bg-white/10 hover:border-${
              highlightColor !== undefined
                ? highlightColor
                : "onBackgroundEmPrimary"
            } hover:text-${
              highlightColor != undefined
                ? highlightColor
                : "onBackgroundEmPrimary"
            }`
      } ${props.className}`}
      onClick={props.onClick}
    >
      <Body>{props.children}</Body>
    </ButtonComponent>
  );
}
