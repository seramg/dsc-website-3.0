import React from "react";
import LinkedinIcon from "@/../public/assets/icons/linkedin-logo.svg";
import { Globe, InstagramLogo, TwitterLogo } from "@phosphor-icons/react";
import GitHubLogo from "@/../public/assets/icons/github-logo.svg";

interface SocialRowProps {
  grow?: boolean;
  socials: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    github?: string;
    website?: string;
  };
}

interface SocialTileProps {
  href: string;
  icon: JSX.Element;
}

export default function SocialRow({ socials, grow = true }: SocialRowProps) {
  const hoverClass = " group-hover/socialtile:text-onBackgroundEmPrimary";
  return (
    <div className={`socials flex flex-wrap gap-2 ${grow ? "w-full" : ""}`}>
      {socials.instagram && (
        <SocialTile
          href={"https://instagram.com/" + socials.instagram}
          icon={
            <InstagramLogo
              className={"text-onBackgroundSecondary" + hoverClass}
              weight="fill"
              width={20}
              height={20}
            ></InstagramLogo>
          }
        ></SocialTile>
      )}
      {socials.twitter && (
        <SocialTile
          href={"https://twitter.com/" + socials.twitter}
          icon={
            <TwitterLogo
              className={"text-onBackgroundSecondary" + hoverClass}
              weight="fill"
              width={20}
              height={20}
            ></TwitterLogo>
          }
        ></SocialTile>
      )}
      {socials.linkedin && (
        <SocialTile
          href={"https://linkedin.com/in/" + socials.linkedin}
          icon={
            <LinkedinIcon
              className={"text-onBackgroundSecondary" + hoverClass}
              width={20}
              height={20}
            ></LinkedinIcon>
          }
        ></SocialTile>
      )}
      {socials.github && (
        <SocialTile
          href={"https://github.com/" + socials.github}
          icon={
            <GitHubLogo
              className={"text-onBackgroundSecondary" + hoverClass}
              width={20}
              height={20}
            ></GitHubLogo>
          }
        ></SocialTile>
      )}

      {socials.website && (
        <SocialTile
          href={"https://" + socials.website}
          icon={
            <Globe
              className={"text-onBackgroundSecondary" + hoverClass}
              width={20}
              height={20}
            ></Globe>
          }
        ></SocialTile>
      )}
    </div>
  );
}

function SocialTile({ href, icon }: SocialTileProps) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <div className="group/socialtile bg-backgroundNeutralPrimary hover:bg-surfaceTertiary h-9 w-9 rounded-lg flex justify-center items-center">
        {icon}
      </div>
    </a>
  );
}
