import React from 'react'
import Marquee from 'react-fast-marquee'

const MarqueeContainer = () => {
  return (
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
  )
}

export default MarqueeContainer
