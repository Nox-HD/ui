"use client";
import React, { useState, useEffect} from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="font-bold text-5xl h-[150vh] w-full flex flex-col justify-center pl-20">
      {Projects.map((project, index) => (
        <motion.div
          key={index}
          className="relative h-28 flex items-center"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <div>{project.name}</div>
        </motion.div>
      ))}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            key={Projects[hoveredIndex].name}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed"
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
            }}
          >
            <Image 
              src={Projects[hoveredIndex].image} 
              height={200}
              width={200} 
              alt={Projects[hoveredIndex].name} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Element;