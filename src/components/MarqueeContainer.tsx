import React from "react";
import Marquee from "react-fast-marquee";

const data = ["UXTopia", "Not just a regular design event", "Nov 15-21"];

const MarqueeContainer = () => {
  return (
    <div className="h-8 bg-onBackgroundEmPrimary text-backgroundEmPrimary flex justify-center items-center">
      <Marquee pauseOnHover play delay={0} autoFill>
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-center">
            <span>{item}</span>
            <div className=" justify-center rounded-full bg-backgroundEmPrimary h-2 w-2 mx-4"></div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeContainer;
