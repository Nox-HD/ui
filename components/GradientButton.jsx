"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import Image from "next/image";

export function HoverBorderGradientDemo() {
  return (
    <div className="pb-2 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="bg-black text-white flex items-center space-x-2"
      >
        <Image className='invert' src="./3.svg" width={25} height={25}></Image>
        <span>Our Agency</span>
      </HoverBorderGradient>
    </div>
  );
}

