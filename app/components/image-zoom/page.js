"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ParallaxSection from "./element";

const TemplateNoCentre = ({
  heading,
  subtitle,
  element,
  tabcode,
  dependencies,
  csscode,
  jsxcode,
  jsxlocation,
  csslocation,
}) => {
  const [copied1, setCopied1] = useState(false);
  const [copied2, setCopied2] = useState(false);
  const [copied3, setCopied3] = useState(false);
  const [Csscodes, setCsscode] = useState(true);
  const [Jsxcodes, setJsxcode] = useState(true);

  useEffect(() => {
    const checkCodes = () => {
      if (csscode === "") {
        setCsscode(false);
      }
      if (jsxcode === "") {
        setJsxcode(false);
      }
    };

    checkCodes();
  }, [csscode, jsxcode]);

  return (
    <div>
      <article className="prose prose-slate prose-invert prose-lg pb-5">
        <h1>Image Zoom</h1>
        <p>
          Dynamic image zoom activated by scrolling through the page content
        </p>
      </article>
      <div className="flex flex-col items-center justify-center ">
        <Tabs defaultValue="preview" className="w-full">
          <TabsList className="flex w-fit m-auto">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Usage</TabsTrigger>
          </TabsList>
          <TabsContent
            className="flex previews m-auto overflow-hidden"
            value="preview"
          >
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="previews border min-h-[25vw] md:max-h-[48vw] mt-5 min-w-full rounded-xl overflow-y-auto flex flex-col"
            >
              <div className="previews lg:h-[100vh]">
                <ParallaxSection
                  className="previews"
                  outsideImage={"/images/outside.png"}
                  insideImage={
                    "url(https://images.unsplash.com/photo-1589848315097-ba7b903cc1cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
                  }
                />
              </div>
            </motion.div>
          </TabsContent>
          <TabsContent
            className="flex w-full m-auto overflow-hidden"
            value="code"
          >
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="border min-h-[25vw] min-w-full  rounded-xl mt-5 overflow overflow-auto codes"
            >
              <SyntaxHighlighter
                className="codes overflow overflow-auto h-full max-h-[30rem]"
                language="javascript"
                style={atomOneDark}
                customStyle={{
                  backgroundColor: "#18181b",
                  borderRadius: "10px",
                  padding: "25px",
                  width: "100%",
                }}
              >
                {`import React from 'react'
import ImageZoom from '@/components/image-zoom/imagezoom'

const App = () => {
  return (
    <div>
        <ImageZoom
            outsideImage={"/images/outside.png"}
            insideImage={"url(https://images.unsplash.com/photo-1589848315097-ba7b903cc1cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}
        />
    </div>
  )
}

export default App`}
              </SyntaxHighlighter>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
      <div className="pt-10">
        <h1 className="text-4xl font-bold">Installation</h1>
        <hr className="solid pb-5"></hr>
        <h2 className="text-xl font-bold pb-3">Install dependencies</h2>
        <div className="relative">
          <SyntaxHighlighter
            className="codes overflow overflow-auto"
            language="powershell"
            style={atomOneDark}
            customStyle={{
              backgroundColor: "#18181b",
              borderRadius: "10px",
              padding: "15px",
              width: "100%",
            }}
          >
            npm i gsap
          </SyntaxHighlighter>
          <button
            className="p-2 absolute right-3 top-3 hover:bg-[#3f3f46] transition-colors duration-200 rounded-sm"
            onClick={async () => {
              navigator.clipboard.writeText("npm i gsap"),
                setCopied1(true),
                setTimeout(() => {
                  setCopied1(false);
                }, 1500);
            }}
          >
            {!copied1 && (
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
                className="lucide lucide-clipboard h-3 w-3"
              >
                <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
              </svg>
            )}
            {copied1 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-check"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            )}
          </button>
        </div>
        {Jsxcodes && (
          <div>
            <h2 className="text-xl font-bold py-3 pt-10">
              Copy the JSX Source Code
            </h2>
            <div className="pb-2">components/image-zoom/imagezoom.jsx</div>
            <div className="relative">
              <SyntaxHighlighter
                id="maincode"
                className="codes overflow overflow-auto max-h-96"
                language="javascript"
                style={atomOneDark}
                customStyle={{
                  backgroundColor: "#18181b",
                  borderRadius: "10px",
                  padding: "15px",
                  width: "100%",
                }}
              >
                {`"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ImageZoom = ({ outsideImage, insideImage }) => {
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
        scale: 1.2,
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
      className="h-[100vw] md:h-[100vh] overflow-y-auto overflow-x-hidden previews aspect-square md:aspect-auto"
    >
      <div ref={wrapperRef} className="relative w-full h-full z-10">
        <div className="relative w-full h-full overflow-hidden">
          <section
            ref={heroRef}
            className="w-full h-full bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: \`\${insideImage}\` }}
          ></section>
        </div>
        <div className="absolute top-0 left-0 right-0 w-full h-full z-20 overflow-hidden">
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

export default ImageZoom;
`}
              </SyntaxHighlighter>
              <button
                className="p-2 absolute right-3 top-3 hover:bg-[#3f3f46] transition-colors duration-200 rounded-sm"
                onClick={async () => {
                  navigator.clipboard.writeText(`"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ImageZoom = ({ outsideImage, insideImage }) => {
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
        scale: 1.2,
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
      className="h-[100vw] md:h-[100vh] overflow-y-auto overflow-x-hidden previews aspect-square md:aspect-auto"
    >
      <div ref={wrapperRef} className="relative w-full h-full z-10">
        <div className="relative w-full h-full overflow-hidden">
          <section
            ref={heroRef}
            className="w-full h-full bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: \`\${insideImage}\` }}
          ></section>
        </div>
        <div className="absolute top-0 left-0 right-0 w-full h-full z-20 overflow-hidden">
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

export default ImageZoom;
`),
                    setCopied3(true),
                    setTimeout(() => {
                      setCopied3(false);
                    }, 1500);
                }}
              >
                {!copied3 && (
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
                    className="lucide lucide-clipboard h-3 w-3"
                  >
                    <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                  </svg>
                )}
                {copied3 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-check"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplateNoCentre;
