import { Body, BodyLarge, BodySmall } from "@/components/type-styles";
import { Globe, TwitterLogo } from "@phosphor-icons/react";
import { LucideAArrowDown, LucideCopy, LucideGitCommit } from "lucide-react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import linkedinIcon from "@/../public/assets/icons/linkedin-logo.svg";

type GithubCardProps = {
  name: string;
  changes: string[];
  time: string;
};

export default function GithubCard({ name, changes, time }: GithubCardProps) {
  const [commitIds, setCommitIds] = useState<string[]>([]);

  useEffect(() => {
    const generateCommitId = (index: number) => {
      const randomId = Math.floor(Math.random() * 100000)
        .toString()
        .padStart(5, "0");
      return `${randomId}`;
    };

    const newCommitIds = changes.map((_, index) => generateCommitId(index));
    setCommitIds(newCommitIds);
  }, [changes]);

  return (
    <div className="bg-backgroundPrimary border-solid border-2 border-slate-100 w-1fr rounded-lg p-6 flex flex-col gap-4 overflow-hidden">
      <div className="bg-slate-100 h-12 w-12 rounded-full grow-0 shrink-0"></div>
      <div className="flex flex-col gap-8 justify-between h-full">
        <div className="flex flex-col gap-6">
          <div className="flex gap-2">
            <BodyLarge className="!text-[18px] lg:!text-[20px] !font-medium">
              {name}
            </BodyLarge>
            <Body className="text-slate-400">{time}</Body>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col items-center gap-3">
              <LucideGitCommit></LucideGitCommit>
              <div className="w-[1px] h-full bg-slate-200"></div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              Committed to this repository
              <div className="changes flex flex-col border-solid border-2 border-slate-200 rounded-lg bg-slate-300 gap-[1px] overflow-hidden">
                {changes.map((change, index) => (
                  <div
                    className="bg-backgroundPrimary flex justify-between items-center gap-4 p-2 pl-3 flex-wrap gap-y-2"
                    key={index}
                  >
                    <Body className="text-slate-500">{change}</Body>
                    <div className="flex border-solid border-2 rounded-sm bg-slate-300 gap-[1px]">
                      <div className="flex p-1 bg-backgroundSecondary">
                        <LucideCopy width={16} height={16} />
                      </div>
                      <div className="flex px-1 py-2 h-6 items-center bg-backgroundSecondary">
                        <BodySmall className="text-blue-500 ">
                          {commitIds[index]}
                        </BodySmall>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="bg-slate-100 h-9 w-9 rounded-lg flex justify-center items-center">
            <TwitterLogo
              className="text-slate-600"
              weight="fill"
              width={20}
              height={20}
            ></TwitterLogo>
          </div>
          <div className="text-slate-600 bg-slate-100 h-9 w-9 rounded-lg flex justify-center items-center">
            <Image
              src={linkedinIcon}
              alt=""
              width={20}
              height={20}
              className="text-slate-600"
            ></Image>
          </div>
          <div className="bg-slate-100 h-9 w-9 rounded-lg flex justify-center items-center">
            <Globe className="text-slate-600" width={20} height={20}></Globe>
          </div>
        </div>
      </div>
    </div>
  );
}
