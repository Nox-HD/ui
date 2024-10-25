"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const HeaderM = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <main className="relative">
      <Link
        href="/mobile-sidebar"
        className="absolute top-48 left-0 visible md:invisible justify-end pr-14"
        onClick={() => setToggle(!toggle)}
      >
        <Image className="invert" src="/menu.svg" width={30} height={0}></Image>
      </Link>
      {toggle && (
        <div className="absolute z-50 h-screen w-screen bg-black text-white">
          <div></div>
          HeaderM
        </div>
      )}
    </main>
  );
};

export default HeaderM;
