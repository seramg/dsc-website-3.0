"use client";

import React from "react";

import { ModeToggle } from "./mode-toggle";

import {
  Title,
  Heading1,
  Heading2,
  Heading3,
  BodyLarge,
  Body,
  BodySmall,
} from "./../../components/type-styles"; // Import the missing components

const page = () => {
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page</p>
      <div className="bg-backgroundEmPrimary">This is a test</div>
      <Title>Title</Title>
      <Heading1>Heading 1</Heading1>
      <Heading2>Heading 2</Heading2>
      <Heading3>Heading 3</Heading3>
      <BodyLarge>Body Large</BodyLarge>
      <Body>Body</Body>
      <BodySmall>Body Small</BodySmall>
      <ModeToggle />
    </div>
  );
};

export default page;
