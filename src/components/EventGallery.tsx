import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import React, { useEffect } from "react";
import GalleryCard from "./GalleryCard";
import Button from "./Button";
import { Icon } from "@iconify/react/dist/iconify.js";
import useIsSmallScreen from "./hooks/useIsSmallScreen";

export default function EventGallery() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const isSmallScreen = useIsSmallScreen();

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  function carouselNext() {
    if (api) api.scrollNext();
  }

  function carouselPrev() {
    if (api) api.scrollPrev();
  }

  return (
    <div className="w-full flex flex-col gap-4 md:gap-8 items-center">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
        setApi={setApi}
      >
        <CarouselContent>
          {[1, 2, 3, 4, 5].map((i) => (
            <CarouselItem
              key={i}
              className="sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              {/* <div className=" flex p-4 bg-surfacePrimary border-borderPrimary rounded-lg"> */}
              <GalleryCard />
              {/* </div> */}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>{" "}
      {isSmallScreen && (
        <div className="flex items-center gap-2">
          <Button onClick={carouselPrev} variant="secondary">
            <Icon icon="maki:arrow" className="w-auto h-auto rotate-180	" />
          </Button>
          <Button onClick={carouselNext} variant="secondary">
            <Icon icon="maki:arrow" className="w-auto h-auto " />
          </Button>
        </div>
      )}
      {!isSmallScreen && (
        <div className="w-full flex justify-center items-center gap-x-8 gap-y-4 md:justify-between">
          <div className="flex items-center justify-start gap-3">
            <Button>View all events</Button>
            <Button variant="secondary">Become a Speaker/Facilitator</Button>
          </div>

          <div className="flex items-center gap-2">
            <Button onClick={carouselPrev} variant="secondary">
              <Icon icon="maki:arrow" className="w-auto h-auto rotate-180	" />
            </Button>
            <Button onClick={carouselNext} variant="secondary">
              <Icon icon="maki:arrow" className="w-auto h-auto " />
            </Button>
          </div>
        </div>
      )}
      {isSmallScreen && (
        <div className="flex w-full pt-12 flex-col sm:w-[480px] sm:flex-row items-center justify-center gap-3">
          <Button className="w-full flex-1">View all events</Button>
          <Button className="w-full flex-1" variant="secondary">
            Become a Speaker/Facilitator
          </Button>
        </div>
      )}
    </div>
  );
}
