import React from "react";
import { Body, BodyLarge, Heading1, Title } from "../type-styles";
import { Button } from "../ui/button";
import GridCard from "../gridcard/GridCard";
import GalleryCard from "../gallerycard/GalleryCard";
import Image from "next/image";

const HomePage = () => {
  return (
    <>
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

      {/* Building a local ecosystem  */}
      <div
        className="flex flex-col items-center w-full justify-center text-center mx-auto my-0 gap-12"
        style={{ padding: "84px 154px" }}
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

      {/* Gallery */}
      <div
        className="flex flex-col mx-auto w-full bg-backgroundSecondary"
        style={{ padding: "84px 152px", gap: "60px" }}
      >
        <span>
          <Heading1 className="mb-8">What’s happening</Heading1>
          <Body className="text-onBackgroundSecondary">
            Explore the latest events and activities from GDSC MBCET
          </Body>
        </span>
        <div
          className="flex gap-3 justify-between"
          style={{ maxWidth: "1204px", overflowX: "scroll" }}
        >
          <div
            className="flex gap-3 justify-between"
            style={{ flex: "0 0 auto", display: "flex", overflowX: "hidden" }}
          >
            <GalleryCard />
            <GalleryCard /> <GalleryCard /> <GalleryCard /> <GalleryCard />{" "}
            <GalleryCard />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-x-3">
            <Button className="py-3 px-5 rounded-full	"> View all events</Button>
            <Button
              className="py-3 px-5 rounded-full bg-transparent  border-black	"
              variant="outline"
            >
              Become a Speaker/Facilitator
            </Button>
          </div>
          <div className="flex items-center justify-start gap-x-3">
            <Button
              className="py-3 px-5 rounded-full bg-transparent  border-black	"
              variant="outline"
            >
              <Image
                src="./images/ic--baseline-arrow-back.svg"
                width={15}
                height={15}
                alt={"backward"}
              />
            </Button>
            <Button className="py-3 px-5 rounded-full ">
              <Image
                src="./images/ic--baseline-arrow-forward.svg"
                width={15}
                height={15}
                alt={"forward"}
              />
            </Button>
          </div>
        </div>
      </div>

      {/* Books and education */}
      <div
        className="flex items-center w-full justify-center mx-auto my-0 bg-backgroundEmSecondary"
        style={{ padding: "84px 154px",gap:'104px' }}
      >
        <div className="flex flex-col gap-12 w-full items-start" style={{maxWidth:'544px'}}>
          <div className="flex flex-col gap-12 items-start">
            <Heading1>We believe education should be free.</Heading1>
            <Body className="text-onBackgroundSecondary">
              All the events we do at GDSC MBCET are free-of-cost. However, some
              of the bigger events that we do at scale, require some financial
              backing to help us continue that way. We’d love to have your
              support for the same, and in-turn help your brand get exposure
              within the community.
            </Body>
          </div>
          <Button className="py-3 px-5 rounded-full bg-transparent border-black" variant="outline">
            Learn more
          </Button>
        </div>
        <div>
          <Image
            src="/images/books.svg" 
            height={450}
            width={596}
            alt="books"
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
