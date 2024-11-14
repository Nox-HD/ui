"use client";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const Links = ({ link, setAttributes }) => {
  const ref = useRef(null);

  const handleMouseEnter = () => {
    if (ref.current) {
      const { width, left } = ref.current.getBoundingClientRect();
      const parentLeft = ref.current.parentNode.getBoundingClientRect().left;
      setAttributes({
        width: width + 40, // Adjust for padding on both sides
        left: left - parentLeft - 20, // Center the blob under the item
        opacity: 1, // Make the blob visible on hover
      });
    }
  };

  return (
    <li ref={ref} onMouseEnter={handleMouseEnter} className="relative">
      <Link href={link.href}>{link.label}</Link>
    </li>
  );
};

const AnimatedNavBar = ({ links }) => {
  const [attributes, setAttributes] = useState({
    left: 0,
    width: 0,
    opacity: 0, // Initially hidden
  });

  const handleMouseLeave = () => {
    setAttributes((prevAttributes) => ({
      ...prevAttributes,
      opacity: 0, // Hide the blob when mouse leaves the navbar
    }));
  };

  return (
    <div className="relative">
      <div className="bg-white flex relative items-center w-max h-10 rounded-full border border-white">
        <ul
          className="flex flex-row z-10 gap-x-10 mix-blend-difference relative px-6"
          onMouseLeave={handleMouseLeave} // Only hide blob when leaving the whole navbar
        >
          {links.map((link, index) => (
            <Links key={index} link={link} setAttributes={setAttributes} />
          ))}
        </ul>
        <motion.div
          className="bg-black top-1/2 z-0 -translate-y-1/2 absolute h-9 rounded-full"
          animate={{
            width: attributes.width,
            left: attributes.left,
            opacity: attributes.opacity,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </div>
    </div>
  );
};

export default AnimatedNavBar;
