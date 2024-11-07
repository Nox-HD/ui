"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const AnimatedNavBar = () => {
  const [attributes, setAttributes] = useState({
    left: 100,
    width: 100,
    opacity: 1,
  });

  return (
    <div>
      <div className="bg-white flex relative items-center w-max h-10 rounded-full border border-white border-5 ">
        <ul className="flex flex-row z-10 gap-x-10 px-8 mix-blend-difference">
          <Link href="#">
            <li>Home</li>
          </Link>
          <Link href="#">
            <li>Contact Us</li>
          </Link>
          <Link href="#">
            <li>Portfolio</li>
          </Link>
          <Link href="#">
            <li>About Us</li>
          </Link>
          <Link href="#">
            <li>FAQs</li>
          </Link>
        </ul>
        <motion.div
          className="bg-black top-1/2 z-0 -translate-y-1/2 left-[0.1rem] absolute h-9 rounded-full"
          animate={attributes}
        />
      </div>
    </div>
  );
};

export default AnimatedNavBar;
