import React from "react";
import { Body, BodyLarge, Heading1, Title } from "./type-styles";
import { Button } from "./ui/button";
import GridCard from "./GridCard";
import GalleryCard from "./GalleryCard";
import Image from "next/image";
import { Icon } from "@iconify/react";

const HomePage = () => {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center text-center my-0 bg-backgroundEmPrimary bg-clouds bg-cover	pt-20 px-60 bg-no-repeat	gap-16"
        style={{
          backgroundPosition: "center top 152px ", // Centers the image horizontally and positions it 152px from the top
        }}
      >
        <span className=" flex flex-col gap-8">
          <Title>
            Let’s build cool things that <br /> matter, together
          </Title>
          <BodyLarge className="text-onBackgroundSecondary">
            We’re a student community powered by Google Developers, for all{" "}
            <br /> things developer-centric and beyond. We help students keep
            their <br /> heads in the clouds ... while having their feet on the
            ground.
          </BodyLarge>
        </span>
        <div className="flex items-center justify-center gap-x-3">
          <Button className="py-3 px-5 rounded-full	"> Become a Member</Button>
          <Button
            className="py-3 px-5 rounded-full	 border-black	bg-transparent"
            variant="outline"
          >
            View Events
          </Button>
        </div>

        <div>
          <Image
            src="./images/woman-looking-up.svg"
            width={0}
            height={0}
            className="w-auto h-auto"
            alt={"woman looking up"}
          />
        </div>
      </div>

      {/* Building a local ecosystem  */}
      <div
        className="flex flex-col items-center w-full justify-center text-center mx-auto my-0 gap-12"
        style={{ padding: "84px 154px" }}
      >
        <span className=" flex flex-col gap-8" style={{ padding: "0 207px" }}>
          <Heading1>Building a local ecosystem of makers</Heading1>
          <Body className="text-onBackgroundSecondary px-28	">
            We aim to bring together individuals with a shared passion of
            technology and empower them to build upon their dreams, while having
            fun doing it.
          </Body>
        </span>
        <div className="grid grid-cols-2 grid-rows-2 gap-3">
          <GridCard
            image="mingcute:calendar-fill"
            heading="Events"
            body="We organize various events such as study jams, hackathons, and conferences to help members learn about the latest technologies"
            buttonText="Explore our events"
            backgroundColor="bg-backgroundEmPrimary"
          />
          <GridCard
            image="mdi:heart"
            heading="Community and Learning"
            body="We aim to carve a niche for students in and around the campus, fostering a community that learns together, and creates together."
            buttonText="Join our community"
            backgroundColor="bg-backgroundEmTertiary"
          />
          <GridCard
            image="iconamoon:box-fill"
            heading="Resources"
            body="We’re building a growing repository of useful resources across different verticals that you can use as well as contribute to."
            buttonText="View Resources"
            backgroundColor="bg-backgroundEmSecondary"
          />
          <GridCard
            image="ic:round-stairs"
            heading="& Beyond"
            body="Powered by the Google Developers' family, we are a students’ club whose spirit of innovation and collaboration has guided us since 2019."
            buttonText="More about us"
            backgroundColor="bg-backgroundTeritiary"
          />
        </div>
      </div>

      {/* Gallery */}
      <div
        className="flex flex-col mx-auto w-full bg-backgroundSecondary gap-16"
        style={{ padding: "84px 152px" }}
      >
        <span className=" flex flex-col gap-8">
          <Heading1>What’s happening</Heading1>
          <Body className="text-onBackgroundSecondary">
            Explore the latest events and activities from GDSC MBCET
          </Body>
        </span>
        <div
          className="flex gap-3 justify-between overflow-x-scroll"
          style={{ maxWidth: "1204px" }}
        >
          <div
            className="flex gap-3 justify-between overflow-x-hidden flex-[0_0_auto]"
          >
            <GalleryCard />
            <GalleryCard /> 
            <GalleryCard /> 
            <GalleryCard /> 
            <GalleryCard />
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
              <Icon
              icon="maki:arrow"
                className="w-auto h-auto rotate-180	"
              />
            </Button>
            <Button className="py-3 px-5 rounded-full ">
              <Icon
              icon="maki:arrow"
                className="w-auto h-auto "
              />
            </Button>
          </div>
        </div>
      </div>

      {/* Books and education */}
      <div
        className="flex items-center w-full justify-center mx-auto my-0 bg-backgroundEmSecondary"
        style={{ padding: "84px 154px", gap: "104px" }}
      >
        <div
          className="flex flex-col gap-12 w-full items-start"
          style={{ maxWidth: "544px" }}
        >
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
          <Button
            className="py-3 px-5 rounded-full bg-transparent border-black"
            variant="outline"
          >
            Learn more
          </Button>
        </div>
        <div>
          <Image src="/images/books.svg" height={0} width={0} className="w-auto h-auto" alt="books" />
        </div>
      </div>

      {/* hardest step */}
      <div>
        <Image
          src="./images/boy-kicking-ball.svg"
          width={0}
          height={0}
          className="w-auto h-auto"
          alt={"boy kicking ball"}
        />
        <div
          className="flex flex-col items-center justify-center text-center my-0 mx-auto"
          style={{ padding: "0 431px" }}
        >
        <span className=" flex flex-col gap-8">
            <Title>
              The hardest part is taking that first step
            </Title>
            <BodyLarge className="text-onBackgroundSecondary">
              It’s time to plant your feet on the ground and start building out
              your dreams.{" "}
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
      </div>

      {/* ps */}
      <div
        className="flex items-center justify-center w-full mx-auto my-0 bg-backgroundEmPrimary p-8 gap-3"
      >
        <Body>
          P.S. This website was made with by some cool frens who dared to take
          the first step
        </Body>
        <Button
          className="py-3 px-5 rounded-full bg-transparent border-black"
          variant="outline"
        >
          Learn more
        </Button>
      </div>
    </>
  );
};

export default HomePage;
