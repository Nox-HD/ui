'use client'
import React from "react";
import gsap from "gsap";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from 'lenis'

const ScrollablePhotoGallery = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useEffect(() => {
    const lenis = new Lenis()

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time)=>{
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)
  }, null)

  const Images = [
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
      scrub: 1,
    }
  });
  useGSAP(() => {
    tl
      .to(".first", {
        x: "-37%",
        smooth: true,
        ease: "power1.inOut"
      }, "<")
      .to(".second", {
        x: "37%",
        smooth: true,
        ease: "power1.inOut"
      }, "<")
      .to(".third", {
        x: "-37%",
        smooth: true,
        ease: "power1.inOut"
      }, "<")
      .to(".fourth", {
        x: "37%",
        smooth: true,
        ease: "power1.inOut"
      }, "<")
      .to(".fifth", {
        x: "-37%",
        smooth: true,
        ease: "power1.inOut"
      }, "<")
  })
  
  return (
    <div ref={containerRef} className="container overflow-y-auto overflow-x-hidden">
      <div className="w-screen h-[50vh]"/>
      <div className="grid gap-y-6">
        <div className="flex gap-x-6 first flex-nowrap items-center">
          {Images.slice(0, 3).map((image, index) => (
              <div key={index} className="flex-shrink-0 rounded-xl overflow-hidden">
                  <Image src={image} height={300} width={600} />
              </div>
          ))}
        </div>
        <div className="gap-x-6 second flex-nowrap flex justify-end items-center">
          {Images.slice(4, 7).map((image, index) => (
            <div key={index} className="flex-shrink-0 rounded-xl overflow-hidden">
                  <Image src={image} height={300} width={600} />
              </div>
          ))}
        </div>
        <div className="flex gap-x-6 third flex-nowrap items-center">
          {Images.slice(8, 11).map((image, index) => (
              <div key={index} className="flex-shrink-0 rounded-xl overflow-hidden">
                  <Image src={image} height={300} width={600} />
              </div>
          ))}
        </div>
        <div className="gap-x-6 fourth flex-nowrap flex justify-end items-center">
          {Images.slice(12, 15).map((image, index) => (
            <div key={index} className="flex-shrink-0 rounded-xl overflow-hidden">
                  <Image src={image} height={300} width={600} />
              </div>
          ))}
        </div>
        <div className="flex gap-x-6 fifth flex-nowrap items-center">
          {Images.slice(16, 19).map((image, index) => (
            <div key={index} className="flex-shrink-0 rounded-xl overflow-hidden">
                  <Image src={image} height={300} width={600} />
              </div>
          ))}
        </div>
      </div>
      <div className="w-screen h-[50vh]"/>
    </div>
  );
};

export default ScrollablePhotoGallery;
