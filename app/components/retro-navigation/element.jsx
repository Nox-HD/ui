"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const poppinsFont = {
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 900,
  fontStyle: "normal",
};

const springTransition = {
  type: "spring",
  stiffness: 150,
  damping: 15,
  mass: 0.75,
};

export default function Menu({ menuItems }) {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@900&display=swap");
      `}</style>
      <div className="flex justify-center items-center min-h-screen bg-black overflow-hidden">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="relative block text-[6.5em] leading-[1.2em] no-underline"
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
                style={poppinsFont}
              >
                <motion.span
                  className="relative block"
                  initial={{
                    color: "transparent",
                    WebkitTextStroke: "1px #fff",
                  }}
                  animate={{
                    color: hoveredItem === index ? "#fff" : "transparent",
                    WebkitTextStroke:
                      hoveredItem === index ? "1px #000" : "1px #fff",
                  }}
                  transition={springTransition}
                >
                  {item.text}
                </motion.span>
                <AnimatePresence>
                  {hoveredItem === index && (
                    <>
                      <motion.span
                        className="absolute top-0 left-0"
                        initial={{ opacity: 0, x: 0, y: 0 }}
                        animate={{ opacity: 1, x: 10, y: -10 }}
                        exit={{ opacity: 0, x: 0, y: 0 }}
                        transition={springTransition}
                        style={{
                          color: "#f00",
                          WebkitTextStroke: "1px #000",
                        }}
                      >
                        {item.text}
                      </motion.span>
                      <motion.span
                        className="absolute top-0 left-0"
                        initial={{ opacity: 0, x: 0, y: 0 }}
                        animate={{ opacity: 1, x: 20, y: -20 }}
                        exit={{ opacity: 0, x: 0, y: 0 }}
                        transition={springTransition}
                        style={{
                          color: "#0ff",
                          WebkitTextStroke: "1px #000",
                        }}
                      >
                        {item.text}
                      </motion.span>
                    </>
                  )}
                </AnimatePresence>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
