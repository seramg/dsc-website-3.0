"use client";

import { Body, BodySmall, Heading1 } from "@/components/type-styles";
import React, { use } from "react";
import FigmaCard from "./components/figma-card";
import GithubCard from "./components/github-card";
import { contributors } from "@/data/contributors";

export default function Contributors() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:px-[54px] xl:px-[154px] md:py-[84px] p-4 gap-[84px]">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <Heading1>The Architects</Heading1>
            <Body>
              GDSC MBCET brings together ordinary humans with the extraordinary
              ability to chase their dreams.
            </Body>
          </div>
          <div className="w-full bg-backgroundSecondary rounded-lg overflow-hidden">
            <div className="flex bg-black h-12 w-100 p-3 relative">
              <div className="bg-white h-5 w-5 rounded-lg"></div>
              <BodySmall className="absolute left-0 right-0 grid place-items-center">
                <span className="text-slate-500">
                  GDSC MBCET Community Project/
                </span>
                <span className="text-white">Website 3.0</span>
              </BodySmall>
            </div>
            <div className=" p-4 md:p-8 lg:p-[64px] grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
              {contributors
                .filter((contributor) => contributor.type === "design")
                .map((contributor, index) => (
                  <FigmaCard
                    key={index}
                    name={contributor.name}
                    changes={contributor.changes}
                    time={contributor.time}
                  ></FigmaCard>
                ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <Heading1>The Builders</Heading1>
            <Body>
              GDSC MBCET brings together ordinary humans with the extraordinary
              ability to chase their dreams.
            </Body>
          </div>
          <div className="w-full bg-backgroundSecondary rounded-lg overflow-hidden">
            <div className="flex bg-black h-12 w-100 p-3 relative">
              <div className="bg-white h-5 w-5 rounded-lg"></div>
              <BodySmall className="absolute left-0 right-0 grid place-items-center">
                <span className="text-slate-500">
                  GDSC MBCET Community Project/
                </span>
                <span className="text-white">Website 3.0</span>
              </BodySmall>
            </div>
            <div className=" p-4 md:p-8 lg:p-[64px] grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
              {contributors
                .filter((contributor) => contributor.type === "code")
                .map((contributor, index) => (
                  <GithubCard
                    key={index}
                    name={contributor.name}
                    changes={contributor.changes}
                    time={contributor.time}
                  ></GithubCard>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
