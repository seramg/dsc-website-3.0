import React from "react";
import Image from "next/image";
import { Body, BodySmall, Heading3 } from "./type-styles";
import { Icon } from "@iconify/react";
import SocialRow from "@/app/contributors/components/social-row";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div
        className="flex justify-between"
        style={{ padding: "0 97px 0 52px" }}
      >
        <div className="py-12" style={{ paddingTop: "50px" }}>
          <Image
            src="/images/logo.svg" // Route of the image file
            height={26} // Desired size with correct aspect ratio
            width={220} // Desired size with correct aspect ratio
            alt="logo"
          />
        </div>
        <div className="flex flex-col gap-7">
          <div className="flex gap-7" style={{ paddingTop: "73px" }}>
            <div className="flex flex-col gap-4">
              <Heading3>About</Heading3>
              <div className="flex flex-col gap-2">
                <Body>Who we are</Body>
                <Body>Events</Body>
                <Body>Magazine</Body>
                <Body>Community Guidelines</Body>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Heading3>Curations</Heading3>
              <div className="flex flex-col gap-2">
                <Body>Opportunities</Body>
                <Body>Resources</Body>
              </div>
            </div>
          </div>
          <SocialRow
            socials={{
              twitter: "gdscmbcet",
              linkedin: "gdscmbcet",
              instagram: "gdscmbcet",
              github: "dscmbcet",
            }}
          ></SocialRow>
        </div>
      </div>
      <div className="flex mx-auto mt-388" style={{ gap: "86px" }}>
        <BodySmall>GDSC MBCET © 2023. All Rights Reserved.</BodySmall>
        <BodySmall>Made with by some cool frens</BodySmall>
      </div>
      <Image
        src="/images/doodles.svg" // Route of the image file
        height={0} // Desired size with correct aspect ratio
        width={0} // Desired size with correct aspect ratio
        style={{ width: "100%", height: "auto" }} // optional
        alt="doodles"
      />
    </div>
  );
};

export default Footer;
