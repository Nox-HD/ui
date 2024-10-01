'use client'
import React from "react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

const ScrollablePhotoGallery = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  
  const Images = [
    "/photogallery/image1.jpg",
    "/photogallery/image2.jpg",
    "/photogallery/image3.jpg",
    "/photogallery/image4.jpg",
    "/photogallery/image5.jpg",
    "/photogallery/image6.jpg",
    "/photogallery/image7.jpg",
    "/photogallery/image8.jpg",
    "/photogallery/image4.jpg",
    "/photogallery/image9.jpg",
    "/photogallery/image10.jpg",
    "/photogallery/image11.jpg",
    "/photogallery/image12.jpg",
    "/photogallery/image13.jpg",
    "/photogallery/image14.jpg",
    "/photogallery/image15.jpg",
    "/photogallery/image16.jpg",
    "/photogallery/image17.jpg",
    "/photogallery/image18.jpg",
    "/photogallery/image19.jpg",
    "/photogallery/image20.jpg",
  ];

  const containerRef = useRef(null);

  const container = containerRef.current;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top top",
      end: "bottom bottom",
      markers: true,
      scrub: 5,
    }
  });
  useGSAP(() => {
    tl
      .to(".first", {
        x: "-50%",
        ease: "power1.inOut"
      })
      .to(".second", {
        x: "50%",
        ease: "power1.inOut"
      })
      .to(".third", {
        x: "-50%",
        ease: "power1.inOut"
      })
      .to(".fourth", {
        x: "50%",
        ease: "power1.inOut"
      })
  })
  
  return (
    <div ref={containerRef} className="container overflow-y-auto overflow-x-hidden">
      <div className="w-screen h-[50vh]"/>
      <div className="grid gap-y-6">
        <div className="flex gap-x-6 first flex-nowrap translate-x-[400px] items-center">
          {Images.slice(0, 4).map((image, index) => (
              <div key={index} className="flex-shrink-0">
                  <Image src={image} height={200} width={400} />
              </div>
          ))}
        </div>
        <div className="flex gap-x-6  second flex-nowrap -translate-x-[400px] items-center">
          {Images.slice(5, 9).map((image, index) => (
            <div key={index} className="flex-shrink-0">
                  <Image src={image} height={200} width={400} />
              </div>
          ))}
        </div>
        <div className="flex gap-x-6  third flex-nowrap translate-x-[400px] items-center">
          {Images.slice(10, 14).map((image, index) => (
              <div key={index} className="flex-shrink-0">
                  <Image src={image} height={200} width={400} />
              </div>
          ))}
        </div>
        <div className="flex gap-x-6  fourth flex-nowrap -translate-x-[400px] items-center">
          {Images.slice(15, 19).map((image, index) => (
            <div key={index} className="flex-shrink-0">
                  <Image src={image} height={200} width={400} />
              </div>
          ))}
        </div>
      </div>
      <div className="w-screen h-[50vh]"/>
    </div>
  );
};

export default ScrollablePhotoGallery;
