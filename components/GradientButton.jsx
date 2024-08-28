"use client";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import Image from "next/image";
import Link from "next/link";

export function HoverBorderGradientDemo() {
  return (
    <div className="pb-2 flex justify-center text-center rounded-full">
      <Link href='https://noxhd.com'>
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="bg-black text-white flex items-center space-x-2"
        >
          <Image className='invert' src="./3.svg" width={25} height={25}></Image>
          <span>Our Agency</span>
        </HoverBorderGradient>
      </Link>
    </div>
  );
}

