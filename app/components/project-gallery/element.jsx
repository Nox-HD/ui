"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Element = () => {
  const Projects = [
    { name: "Market Master", image: "/images/image1.jpg" },
    { name: "Trade Tracker", image: "/images/image2.jpg" },
    { name: "Sales Success", image: "/images/image3.jpg" },
    { name: "Profit Planner", image: "/images/image4.jpg" },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e, index) => {
    setHoveredIndex(index);

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="font-bold relative text-5xl h-[150vh] w-full flex flex-col justify-center pl-20">
      {Projects.map((project, index) => (
        <div className="">
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative h-28 flex items-center origin-left cursor-pointer"
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={handleMouseLeave}
          >
            <div>{project.name}</div>
          </motion.div>
        </div>
      ))}
      <Image
            className="absolute transition-opacity duration-300"
            src={Projects.image}
            height={50}
            width={50}
            alt={Projects.name}
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            }}
          />
    </div>
  );
};

export default Element;
