import React from "react";
import Image from "next/image";
import { Heading2, Body } from "./type-styles";
import { Button } from "./ui/button";
import { Icon } from "@iconify/react";

const GridCard = ({
  image,
  heading,
  body,
  buttonText,
  backgroundColor,
}: {
  image: string;
  heading: string;
  body: string;
  buttonText: string;
  backgroundColor: string;
}) => {
  console.log(image)
  return (
    <div
      className={`flex flex-col items-start gap-y-12 py-14 px-12 rounded-xl ${backgroundColor}`}
    >
      {/* icon  */}
      <div
        className={`flex justify-center py-4 px-6 dark ${backgroundColor} rounded-2xl`}
      >
        <Icon icon={image} width={'2rem'} height={'2rem'} className="text-white"/>
      </div>
      {/* text */}
      <div className="flex flex-col gap-y-6 items-start">
        <Heading2>{heading}</Heading2>
        <Body className="text-left text-onBackgroundSecondary">{body}</Body>
      </div>
      {/* button  */}
      <Button
        className="py-3 px-5 rounded-full	 border-black	bg-transparent"
        variant="outline"
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default GridCard;
