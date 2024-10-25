"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

const MysteriousText = ({ text }) => {
  useEffect(() => {
    const heading = document.querySelector(".heading");
    const headingSplitText = new SplitType(heading, { type: "chars" });
    const headingChars = headingSplitText.chars;
    const button = document.querySelector(".button");
    const tl = gsap.timeline();

    tl.from(headingChars, {
      filter: "blur(0.15em)", // Change the Blur Amount
      stagger: {
        from: "left",
        each: 0.1,
      },
      duration: (i) => 1.25 + i * 0.25, // Change the Blur Duration
      ease: "power2.inOut",
    }).from(
      headingChars,
      {
        xPercent: (i) => (i + 1) * 50, // Change the X Offset amount
        opacity: 0,
        stagger: {
          from: "left",
          each: 0.1,
        },
        duration: (i) => 1 + i * 0.3, // Change the X Offset Duration
        ease: "power2.out",
      },
      "<"
    );
    button.addEventListener("click", () => {
      tl.restart();
    });
  }, []);

  return (
    <div className="flex relative items-center justify-center h-full bg-black">
      <h1
        className="heading font-bold text-white text-center uppercase pt-2"
        style={{ fontSize: "clamp(5rem, 16vw, 16.5rem)" }}
      >
        {text}
      </h1>
      <div className="button p-2 hover:bg-stone-800 absolute right-10 mr-2 top-10 rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          class="lucide lucide-rotate-ccw"
        >
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <path d="M3 3v5h5" />
        </svg>
      </div>

      <style jsx>{`
        .heading {
          transform-origin: 50% 50%;
        }
        .heading > div {
          transform-origin: 50% 100%;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default MysteriousText;
