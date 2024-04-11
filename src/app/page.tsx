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
import HomePage from "@/components/homepage/HomePage";

export default function Home() {
  return (
    <main className="flex flex-col justify-center mx-auto" style={{maxWidth:'1512px'}}>
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
      <HomePage />
    </main>
  );
}
