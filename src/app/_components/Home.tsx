"use client";

import React from "react";
import { Hero } from "~/components/landing-page/hero";

export function Home() {
  return (
    <div className="bg-grid-white/[0.02] relative flex h-[40rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">
      <Hero className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />
      <div className=" relative z-10  mx-auto w-full max-w-7xl  p-4 pt-20 md:pt-0">
        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
          randomThoughts <br /> is a plateform for Developers.
        </h1>
        <p className="mx-auto mt-4 max-w-screen-2xl text-center text-base font-normal text-white">
          A place for developers to share their thoughts, ideas and projects and connect with like-minded developers. Explore
          new technologies, collaborate on projects, and grow your skills. Start
        </p>
      </div>
    </div>
  );
}
