import React from "react";
import { Button as ButtonComponent } from "./ui/button";
import { Body } from "./type-styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({ variant = "primary", ...props }: ButtonProps) {
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
          : "hover:bg-backgroundPrimary hover:border-onBackgroundEmPrimary hover:text-onBackgroundEmPrimary"
      } ${props.className}`}
      onClick={props.onClick}
    >
      <Body>{props.children}</Body>
    </ButtonComponent>
  );
}
