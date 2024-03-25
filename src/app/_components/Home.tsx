"use client";

import React from "react";
import { Hero } from "~/components/landing-page/hero";

export function Home() {
  return (
    <div className="bg-grid-white/[0.02] relative flex h-[40rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">
      <Hero className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />
      
    </div>
  );
}
