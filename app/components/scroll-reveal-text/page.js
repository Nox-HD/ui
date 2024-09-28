"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Element from "./element";

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
        <h1>{heading}</h1>
        <p>{subtitle}</p>
      </article>
      <div className="flex flex-col items-center justify-center ">
        <Tabs defaultValue="preview" className="w-full">
          <TabsList className="flex w-fit m-auto">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Usage</TabsTrigger>
          </TabsList>
          <TabsContent className="flex  m-auto overflow-hidden" value="preview">
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="border min-h-[25vw] mt-5 min-w-full rounded-xl overflow  flex flex-col overflow-hidden"
            >
              <Element />
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
                {tabcode}
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
            {dependencies}
          </SyntaxHighlighter>
          <button
            className="p-2 absolute right-3 top-3 hover:bg-[#3f3f46] transition-colors duration-200 rounded-sm"
            onClick={async () => {
              navigator.clipboard.writeText(jsxcode),
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
        {Csscodes && (
          <div>
            <h2 className="text-xl font-bold py-3 pt-10">
              Copy the CSS Markup
            </h2>
            <div className="pb-2">{csslocation}</div>
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
                {csscode}
              </SyntaxHighlighter>
              <button
                className="p-2 absolute right-3 top-3 hover:bg-[#3f3f46] transition-colors duration-200 rounded-sm"
                onClick={async () => {
                  navigator.clipboard.writeText(jsxcode),
                    setCopied2(true),
                    setTimeout(() => {
                      setCopied2(false);
                    }, 1500);
                }}
              >
                {!copied2 && (
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
                {copied2 && (
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
        {Jsxcodes && (
          <div>
            <h2 className="text-xl font-bold py-3 pt-10">
              Copy the JSX Source Code
            </h2>
            <div className="pb-2">{jsxlocation}</div>
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
                {jsxcode}
              </SyntaxHighlighter>
              <button
                className="p-2 absolute right-3 top-3 hover:bg-[#3f3f46] transition-colors duration-200 rounded-sm"
                onClick={async () => {
                  navigator.clipboard.writeText(jsxcode),
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
