import Link from "next/link";
import React from "react";

const AnimatedNavBar = () => {
  return (
    <div>
      <div className="bg-white text-black flex justify-center items-center w-max h-10 rounded-full border border-5">
        <ul className="flex flex-row gap-x-8 px-8">
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
      </div>
    </div>
  );
};

export default AnimatedNavBar;
