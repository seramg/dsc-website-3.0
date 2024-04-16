"use client";

import { Body, BodySmall, Heading1 } from "@/components/type-styles";
import React, { use } from "react";
import FigmaCard from "./components/figma-card";
import GithubCard from "./components/github-card";
import { contributors } from "@/data/contributors";
import GitHubLogo from "@/../public/assets/icons/github-logo.svg";
import {
  FigmaLogo,
  CaretDown,
  GitFork,
  GitBranch,
} from "@phosphor-icons/react";
import { RefreshCw } from "lucide-react";
import Image from "next/image";

export default function Contributors() {
  return (
    <div className="flex flex-col">
      {/* <div className="flex flex-col md:px-[54px] xl:px-[154px] md:py-[84px] p-4 gap-[84px]"> */}
      <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-y-[84px] px-6 py-6 md:py-[84px]">
        <div className="col-start-1 md:col-start-2 col-end-5 md:col-end-8 lg:col-end-12 flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <Heading1>The Architects</Heading1>
            <Body>
              GDSC MBCET brings together ordinary humans with the extraordinary
              ability to chase their dreams.
            </Body>
          </div>
          <div className="w-full bg-backgroundSecondary rounded-lg overflow-hidden">
            <div className="flex bg-black w-100 p-3 justify-between items-center gap-2">
              <div className="shrink-0 flex justify-center items-center gap-1">
                <FigmaLogo
                  className="text-backgroundPrimary"
                  width={20}
                  height={20}
                ></FigmaLogo>
                <CaretDown
                  height={8}
                  width={8}
                  className="text-white"
                ></CaretDown>
              </div>

              <BodySmall className="text-center">
                <span className="text-slate-500">
                  GDSC MBCET Community Project/
                </span>
                <span className="text-white">Website 3.0</span>
              </BodySmall>
              <div className="h-5 w-5 rounded-lg shrink-0"></div>
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
        <div className="col-start-1 md:col-start-2 col-end-5 md:col-end-8 lg:col-end-12 flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <Heading1>The Builders</Heading1>
            <Body>
              GDSC MBCET brings together ordinary humans with the extraordinary
              ability to chase their dreams.
            </Body>
          </div>
          <div className="w-full bg-backgroundSecondary rounded-lg overflow-hidden">
            <div className="flex bg-black w-100 flex-col lg:flex-row items-center">
              <div className="shrink-0 flex justify-center items-center gap-1 p-3 border-solid border-b-[1px] w-full lg:w-auto lg:border-b-0 border-slate-600">
                <Image src={GitHubLogo} alt="" height={24} width={24} />
              </div>
              <div className="flex w-full border-solid  border-slate-600 border-b-[1px] border-l-0 lg:border-l-[1px] lg:border-b-0 flex-col md:flex-row">
                <div className="flex py-3 px-6 gap-2 justify-between w-full border-solid border-r-0 border-b-[1px] md:border-r-[1px] md:border-b-0 border-slate-600 items-center">
                  <div className="flex gap-2">
                    <GitFork
                      height={16}
                      width={16}
                      className="text-backgroundPrimary"
                    ></GitFork>
                    <div className="flex flex-col">
                      <BodySmall className="text-slate-500">
                        Current Repository
                      </BodySmall>
                      <BodySmall className="text-backgroundPrimary">
                        gdsc-website-3.0
                      </BodySmall>
                    </div>
                  </div>
                  <CaretDown
                    height={8}
                    width={8}
                    className="text-white"
                  ></CaretDown>
                </div>
                <div className="flex py-3 px-6 gap-2 justify-between w-full border-solid border-r-[1px] border-slate-600 items-center">
                  <div className="flex gap-2">
                    <GitBranch
                      height={16}
                      width={16}
                      className="text-backgroundPrimary"
                    ></GitBranch>
                    <div className="flex flex-col">
                      <BodySmall className="text-slate-500">
                        Current Repository
                      </BodySmall>
                      <BodySmall className="text-backgroundPrimary">
                        gdsc-website-3.0
                      </BodySmall>
                    </div>
                  </div>
                  <CaretDown
                    height={8}
                    width={8}
                    className="text-white"
                  ></CaretDown>
                </div>
              </div>

              <div className="flex py-3 px-6 gap-2 w-full gap-2">
                <RefreshCw
                  height={16}
                  width={16}
                  className="text-backgroundPrimary"
                ></RefreshCw>
                <div className="flex flex-col">
                  <BodySmall className="text-backgroundPrimary">
                    Fetch Origin
                  </BodySmall>
                  <BodySmall className="text-slate-500">
                    Last fetched 1 minute ago
                  </BodySmall>
                </div>
              </div>
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
