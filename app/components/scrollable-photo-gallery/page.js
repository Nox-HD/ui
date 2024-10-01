'use client'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import Element from './element';

const TemplateWhite = () => {
  const [copied1, setCopied1] = useState(false)
  const [copied3, setCopied3] = useState(false)
  const [Jsxcodes, setJsxcode] = useState(true)

  return (
    <div>
      <article className="pb-5 prose prose-lg prose-slate prose-invert">
        <h1>Scrollable Photo Gallery</h1>
        <p>Effortlessly showcase your photos in a scroll-driven gallery built with Lenis.</p>
      </article>
        <div className='flex flex-col items-center justify-center '>
            <Tabs defaultValue="preview" className="w-full">
                <TabsList  className='flex m-auto w-fit'>
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="code">Usage</TabsTrigger>
                </TabsList>
                <TabsContent className='flex m-auto overflow-hidden ' value="preview">
                      <motion.div initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3 }} className='bg-black border min-h-[5vw] min-w-full rounded-xl mt-5 overflow overflow-auto flex flex-col justify-center items-center content-center'>
                          <Element />
                      </motion.div>
                </TabsContent>
                <TabsContent  className='flex w-full m-auto overflow-hidden' value="code">
                    <motion.div  initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3 }}  className='min-w-full mt-5 overflow-auto border rounded-xl overflow codes'>
                        <SyntaxHighlighter className='h-full overflow-auto codes overflow max-h-[30rem]' language="javascript" style={atomOneDark} customStyle={{
                            backgroundColor: "#18181b",
                            borderRadius: "10px",
                            padding: "25px",
                            width: "100%",
                            }}>
                            {`import React from 'react'
import ScrollablePhotoGallery from '@/components/scrollable-photo-gallery/scrollablephotogallery'

const App = () => {
  return (
    <div>
      <ScrollablePhotoGallery />
    </div>
  )
}

export default App`}
                        </SyntaxHighlighter>
                    </motion.div>
                </TabsContent>
            </Tabs>
        </div>
        <div className='pt-10'> 
            <h1 className='text-4xl font-bold'>
                Installation
            </h1>
            <div
              role="alert"
              className="flex items-center p-2 mt-5 text-yellow-900 transition duration-300 ease-in-out bg-yellow-100 border-l-4 border-yellow-500 rounded-lg dark:bg-yellow-900 dark:border-yellow-700 dark:text-yellow-100 hover:bg-yellow-200 dark:hover:bg-yellow-800 "
            >
              <svg
                stroke="currentColor"
                viewBox="0 0 24 24"
                fill="none"
                className="flex-shrink-0 w-5 h-5 mr-2 text-yellow-600"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  stroke-width="2"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
              <p className="text-xs font-semibold">
              This component needs the Lenis smooth scroll library to be set up on the page where you want to use it.
              </p>
            </div>
            <hr className="pb-5 solid"></hr>
            <h2 className='pb-3 text-xl font-bold'>
                Install dependencies
            </h2>
            <div className='relative' >
                <SyntaxHighlighter className='overflow-auto codes overflow' language="powershell" style={atomOneDark} customStyle={{
                                backgroundColor: "#18181b",
                                borderRadius: "10px",
                                padding: "15px",
                                width: "100%",
                                }}>
                  npm i gsap lenis
                </SyntaxHighlighter>
                <button className='p-2 absolute right-3 top-3 hover:bg-[#3f3f46] transition-colors duration-200 rounded-sm' onClick={async () => {navigator.clipboard.writeText(jsxcode), setCopied3(true),   setTimeout(() => {setCopied3(false)}, 1500)}}>
                    {!copied3 && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard h-3 w-3"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path></svg>}
                    {copied3 && <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>}
                  </button>
            </div>
          
            {Jsxcodes && (<div>
                <h2 className='py-3 pt-10 text-xl font-bold'>
              Copy the JSX Source Code
              </h2>
              <div className='pb-2'>components/scrollable-photo-gallery/scrollablephotogallery.jsx</div>
              <div className='relative'>
                  <SyntaxHighlighter id="maincode" className='overflow-auto codes overflow max-h-96' language="javascript" style={atomOneDark} customStyle={{
                                  backgroundColor: "#18181b",
                                  borderRadius: "10px",
                                  padding: "15px",
                                  width: "100%",
                                  }}>
                  {`"use client";
import React from "react";
import gsap from "gsap";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";

const ScrollablePhotoGallery = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }, null);

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
    },
  });
  useGSAP(() => {
    tl.to(
      ".first",
      {
        x: "-37%",
        smooth: true,
        ease: "power1.inOut",
      },
      "<",
    )
      .to(
        ".second",
        {
          x: "37%",
          smooth: true,
          ease: "power1.inOut",
        },
        "<",
      )
      .to(
        ".third",
        {
          x: "-37%",
          smooth: true,
          ease: "power1.inOut",
        },
        "<",
      )
      .to(
        ".fourth",
        {
          x: "37%",
          smooth: true,
          ease: "power1.inOut",
        },
        "<",
      )
      .to(
        ".fifth",
        {
          x: "-37%",
          smooth: true,
          ease: "power1.inOut",
        },
        "<",
      );
  });

  return (
    <div
      ref={containerRef}
      className="container overflow-y-auto overflow-x-hidden"
    >
      <div className="w-screen h-[50vh]" />
      <div className="grid gap-y-6">
        <div className="flex gap-x-6 first flex-nowrap items-center">
          {Images.slice(0, 3).map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 rounded-xl overflow-hidden"
            >
              <Image src={image} height={300} width={600} />
            </div>
          ))}
        </div>
        <div className="gap-x-6 second flex-nowrap flex justify-end items-center">
          {Images.slice(4, 7).map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 rounded-xl overflow-hidden"
            >
              <Image src={image} height={300} width={600} />
            </div>
          ))}
        </div>
        <div className="flex gap-x-6 third flex-nowrap items-center">
          {Images.slice(8, 11).map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 rounded-xl overflow-hidden"
            >
              <Image src={image} height={300} width={600} />
            </div>
          ))}
        </div>
        <div className="gap-x-6 fourth flex-nowrap flex justify-end items-center">
          {Images.slice(12, 15).map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 rounded-xl overflow-hidden"
            >
              <Image src={image} height={300} width={600} />
            </div>
          ))}
        </div>
        <div className="flex gap-x-6 fifth flex-nowrap items-center">
          {Images.slice(16, 19).map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 rounded-xl overflow-hidden"
            >
              <Image src={image} height={300} width={600} />
            </div>
          ))}
        </div>
      </div>
      <div className="w-screen h-[50vh]" />
    </div>
  );
};

export default ScrollablePhotoGallery;
`}
                  </SyntaxHighlighter>
                  <button className='p-2 absolute right-3 top-3 hover:bg-[#3f3f46] transition-colors duration-200 rounded-sm' onClick={async () => {navigator.clipboard.writeText(jsxcode), setCopied1(true),   setTimeout(() => {setCopied1(false)}, 1500)}}>
                    {!copied1 && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard h-3 w-3"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path></svg>}
                    {copied1 && <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>}
                  </button>
                </div> 
              </div> )}
        </div>
    </div>
  )
}

export default TemplateWhite
