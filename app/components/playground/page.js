"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

const NebulaHeading = () => {
  useEffect(() => {
    const heading = document.querySelector(".heading");
    const headingSplitText = new SplitType(heading, { type: "chars" });
    const headingChars = headingSplitText.chars;

    gsap.from(headingChars, {
      filter: "blur(0.15em)",
      stagger: {
        from: "left",
        each: 0.1,
      },
      duration: (i) => 1.25 + i * 0.75,
      ease: "power2.inOut",
    });

    gsap.from(
      headingChars,
      {
        xPercent: (i) => (i + 1) * 20,
        opacity: 0,
        stagger: {
          from: "left",
          each: 0.1,
        },
        duration: (i) => 1 + i * 0.85,
        ease: "power2.out",
      },
      "<"
    );
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <h1
        className="heading font-bold text-white text-center uppercase pt-2"
        style={{ fontSize: "clamp(5rem, 16vw, 16.5rem)" }}
      >
        NoxHD
      </h1>

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

export default NebulaHeading;
