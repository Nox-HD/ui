import React from "react";
import TemplateNoCentre from "../element-template-nocentre";
import MysteriousText from "./element";

const AwardsCarousel = () => {
  return (
    <div>
      <TemplateNoCentre
        heading={"Mysterious Text"}
        subtitle={"Dynamic Text Animation with Smooth Blur Fadein Effect."}
        element={<MysteriousText text={"NextJS"} />}
        tabcode={`import React from 'react'
import MysteriousText from '@/components/mysterious-text/mysterioustext'

const App = () => {
  return (
    <div>
      <MysteriousText text={"NextJS"} />
    </div>
  )
}

export default App`}
        dependencies={"npm i SplitType gsap"}
        csscode={""}
        jsxcode={`"use client";
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
  }, []);

  return (
    <div className="flex relative items-center justify-center h-full bg-black">
      <h1
        className="heading font-bold text-white text-center uppercase pt-2"
        style={{ fontSize: "clamp(5rem, 16vw, 16.5rem)" }}
      >
        {text}
      </h1>

      <style jsx>{\`
        .heading {
          transform-origin: 50% 50%;
        }
        .heading > div {
          transform-origin: 50% 100%;
          overflow: hidden;
        }
      \`}</style>
    </div>
  );
};

export default MysteriousText;
`}
        jsxlocation={"components/mysterious-text/mysterioustext.jsx"}
        csslocation={""}
      />
    </div>
  );
};

export default AwardsCarousel;
