import Image from "next/image";
import React from "react";
import { Body, BodySmall, Heading3 } from "./type-styles";
import { Badge } from "./ui/badge";

const GalleryCard = () => {
  return (
    <div className="flex flex-col z-10 rounded-xl bg-surfacePrimary border border-borderPrimary overflow-hidden">
      <Image
        src="/images/insta-post-2.svg" // Route of the image file
        height={0} // Desired size with correct aspect ratio
        width={0} // Desired size with correct aspect ratio
        alt="insta-post"
        className="h-auto w-full"
      />

      <div className="flex flex-col p-6 gap-6">
        <div className="flex flex-col gap-3 text-left">
          <Heading3>Event Heading Here</Heading3>
          <Body className="line-clamp-2 text-onBackgroundSecondary">
            This is a sample description to test this. Half of this will be
            visible, half will be invisible. Let’s try some more here until it
            overflows.
          </Body>
        </div>
        <div className="flex justify-between items-center">
          <Body className="text-onBackgroundTertiary">12th Jan</Body>
          <Badge className="cursor-default py-2 px-3 bg-backgroundEmPrimary hover:bg-backgroundEmPrimary border border-borderEmPrimary rounded-full">
            <BodySmall className="text-onBackgroundEmPrimary">
              Coming Soon
            </BodySmall>
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
