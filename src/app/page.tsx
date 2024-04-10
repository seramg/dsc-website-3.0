"use client";
import Marquee from "react-fast-marquee";
import Header from "@/components/header/Header";
import {
  Body,
  BodyLarge,
  Title,
  Heading1,
  Heading2,
} from "@/components/type-styles";
import { Button } from "@/components/ui/button";
import GridCard from "@/components/gridcard/GridCard";
import GalleryCard from "@/components/gallerycard/GalleryCard";

export default function Home() {
  return (
    <main className="flex flex-col justify-center max-w-screen-2xl mx-auto">
      <Marquee
        pauseOnHover
        play
        delay={0}
        autoFill
        className="h-8 bg-blue-500 text-white"
      >
        <span>UXTopia</span>
        <div className=" justify-center rounded-full bg-white h-5 w-5 mx-8"></div>
        <span>Not just a regular design event</span>
        <div className=" justify-center rounded-full bg-white h-5 w-5 mx-8"></div>
        <span>Nov 15-21</span>
        <div className=" justify-center rounded-full bg-white h-5 w-5 mx-8"></div>
      </Marquee>
      <Header />
      <div
        className="flex flex-col items-center justify-center text-center my-0 mx-auto"
        style={{ maxWidth: "1030px" }}
      >
        <span>
          <Title className="mb-8">
            Let’s build cool things that <br /> matter, together
          </Title>
          <BodyLarge className="text-onBackgroundSecondary">
            We’re a student community powered by Google Developers, for all{" "}
            <br /> things developer-centric and beyond. We help students keep
            their <br /> heads in the clouds ... while having their feet on the
            ground.
          </BodyLarge>
        </span>
        <div className="flex items-center justify-center my-16 gap-x-3">
          <Button className="py-3 px-5 rounded-full	"> Become a Member</Button>
          <Button
            className="py-3 px-5 rounded-full	 border-black	"
            variant="outline"
          >
            View Events
          </Button>
        </div>
      </div>
      <div
        className="flex flex-col items-center justify-center text-center my-0 mx-auto gap-12	"
        style={{ maxWidth: "1204px", padding: "84px 0" }}
      >
        <span>
          <Heading1 className="mb-8">
            Building a local ecosystem of makers
          </Heading1>
          <Body className="text-onBackgroundSecondary">
            We aim to bring together individuals with a shared passion of
            technology and empower them to build upon their dreams, while having
            fun doing it.
          </Body>
        </span>
        <div className="grid grid-cols-2 grid-rows-2 gap-3">
          <GridCard
            image="calendar_fill"
            heading="Events"
            body="We organize various events such as study jams, hackathons, and conferences to help members learn about the latest technologies"
            buttonText="Explore our events"
            backgroundColor="bg-backgroundEmPrimary"
          />
          <GridCard
            image="mdi--heart"
            heading="Community and Learning"
            body="We aim to carve a niche for students in and around the campus, fostering a community that learns together, and creates together."
            buttonText="Join our community"
            backgroundColor="bg-backgroundEmTertiary"
          />
          <GridCard
            image="iconamoon--box-fill"
            heading="Resources"
            body="We’re building a growing repository of useful resources across different verticals that you can use as well as contribute to."
            buttonText="View Resources"
            backgroundColor="bg-backgroundEmSecondary"
          />
          <GridCard
            image="ic--round-stairs"
            heading="& Beyond"
            body="Powered by the Google Developers' family, we are a students’ club whose spirit of innovation and collaboration has guided us since 2019."
            buttonText="More about us"
            backgroundColor="bg-backgroundSecondary"
          />
        </div>
      </div>
      <div
        className="flex flex-col mx-auto w-full gap-x-15"
        style={{ maxWidth: "1204px", padding: "84px 0" }}
      >
        <span>
          <Heading1 className="mb-8">What’s happening</Heading1>
          <Body className="text-onBackgroundSecondary">
            Explore the latest events and activities from GDSC MBCET
          </Body>
        </span>
        <GalleryCard />
      </div>
    </main>
  );
}
