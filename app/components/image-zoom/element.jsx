"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ParallaxSection = ({ outsideImage, insideImage }) => {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const imageRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const wrapper = wrapperRef.current;
    const image = imageRef.current;
    const hero = heroRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: "top top",
        end: "+=150%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        scroller: container,
      },
    });

    tl.to(
      image,
      {
        scale: 2,
        y: "20%",
        transformOrigin: "center center",
        ease: "power1.inOut",
      },
      0,
    ).to(
      hero,
      {
        scale: 1.1,
        transformOrigin: "center center",
        ease: "power1.inOut",
      },
      0,
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-[100vh] overflow-y-auto overflow-x-hidden previews"
    >
      <div ref={wrapperRef} className="relative w-full z-10">
        <div className="relative w-full overflow-hidden">
          <section
            ref={heroRef}
            className="w-full h-screen bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `${insideImage}` }}
          ></section>
        </div>
        <div className="absolute top-0 left-0 right-0 w-full h-screen z-20 overflow-hidden">
          <img
            ref={imageRef}
            src={outsideImage}
            alt="Parallax Image"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default ParallaxSection;
