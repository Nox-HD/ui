'use client'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Elements from './element';
import { motion, AnimatePresence } from "framer-motion";

const AnimatedCard = () => {
    const dependencies = `npm i framer-motion`

    const util = `import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";    

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}`
    const code = `.card {
    aspect-ratio: 1 / 1.6;
    border: 0.2vmin solid rgb(109, 0, 252);
    cursor: pointer;
    position: relative;
    width: 45vmin;
    overflow: hidden;
  }
  
  .card:hover:before {
    background-position: 100% 100%;
    transform: scale(1.08, 1.03);
  }
  
  .card:hover > .content {
    background-position: -10% 0%;
  }
  
  .card:hover > .card-icon {
    color: white; 
  }
  
  .card:hover > .content > .cardsubtitle > .cardsubtitle-word {  
    opacity: 1;
    transform: translateY(0%);
    transition: opacity 0ms, transform 200ms cubic-bezier(.90, .06, .15, .90);
  }
  
  .card:before {
    background: linear-gradient(
      130deg, 
      transparent 0% 33%, 
      var(--g1) 66%, 
      var(--g2) 83.5%, 
      var(--g3) 100%
    );
    background-position: 0% 0%;
    background-size: 300% 300%;
    content: "";
    height: 100%;
    left: 0px;
    pointer-events: none;
    position: absolute;
    top: 0px;
    transition: background-position 350ms ease, transform 350ms ease;
    width: 100%;
    z-index: 1;
  }

  .content {
    background-image: radial-gradient(
      rgba(255, 255, 255, 0.2) 8%, 
      transparent 8%
    );
    background-position: 0% 0%;
    background-size: 5vmin 5vmin;
    height: 100%;
    padding: 5vmin;
    position: relative;
    transition: background-position 350ms ease;
    z-index: 2;
  }

  .content:hover {
    opacity: 75%;
  }
  
  .cardtitle,
  .cardsubtitle {
    color: white;
    font-family: "Anek Latin", sans-serif;
    font-weight: 400;
    margin: 0px;
  }
  
  .cardtitle {
    font-size: 4vmin;
    font-weight: bold;
    transition: opacity 350ms ease;
  }
  
  .cardsubtitle {
    font-size: 3vmin;
    margin-top: 2vmin;
  }
  
  .cardsubtitle-word {
    display: inline-block;
    margin: 0vmin 0.3vmin;
    opacity: 0;
    position: relative;  
    transform: translateY(40%);
    transition: none;
  }
  
  .card-icon {
    bottom: 0px;
    color: rgba(255, 255, 255, 0.5);
    font-size: 7vmin;
    left: 0px;
    margin: 5vmin;
    position: absolute;
    transition: color 250ms ease;
    z-index: 2;
  }`

  const code2 = `import React from 'react'
import styles from './element.module.css'
import { motion } from 'framer-motion'

const AnimatedCard = ({ title, subtitle }) => {
  const textVariants = {
    initial: {
      opacity: 0,
      y: -20
    },
    animate: {
      opacity: 1,
      y: 0
    },
  }

  return (
    <div className='flex justify-center content-center m-10'>
      <motion.div initial="initial" whileHover="animate" transition={{ staggerChildren: 0.05 }}  className={styles.card}>
        <div className={styles.content}>
          <h3 className={styles.cardtitle}>{title}</h3>
          <div className={styles.cardsubtitle}>
            {subtitle.split("").map((char) => {
              return <motion.span style={{ marginRight: char === ' ' ? '0.4rem' : '0.1' }} className='inline-block relative' variants={textVariants}>
                {char}
              </motion.span>
            })}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default AnimatedCard`

  return (
    <div>
      <article className="prose prose-slate prose-invert prose-lg pb-5">
        <h1>Animated Card</h1>
        <p>Colorful Gradient Animation & Text Fade-in when Hovering</p>
      </article>
        <div className='flex flex-col items-center justify-center '>
            <Tabs defaultValue="preview" className="w-full">
                <TabsList  className='flex w-fit m-auto'>
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="code">Usage</TabsTrigger>
                </TabsList>
                <TabsContent className='flex  m-auto overflow-hidden' value="preview">
                      <motion.div initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3 }} className='border min-h-96 min-w-full rounded-xl mt-5 overflow overflow-auto '>
                          <Elements title="Hover to see the wizardry" subtitle="You hovered" />
                      </motion.div>
                </TabsContent>
                <TabsContent  className='flex w-full m-auto overflow-hidden' value="code">
                    <motion.div  initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3 }}  className='border min-h-96 min-w-full  rounded-xl mt-5 overflow overflow-auto codes'>
                        <SyntaxHighlighter className='codes overflow overflow-auto h-full max-h-96' language="javascript" style={atomOneDark} customStyle={{
                            backgroundColor: "#18181b",
                            borderRadius: "10px",
                            padding: "25px",
                            width: "100%",
                            }}>
                            {`import AnimatedCard from './animatedcard';

<AnimatedCard title="Hover to see the wizardry" 
              subtitle="You hovered" />`}
                        </SyntaxHighlighter>
                    </motion.div>
                </TabsContent>
            </Tabs>
        </div>
        <div className='pt-10'> 
            <h1 className='text-4xl font-bold'>
                Installation
            </h1>
            <hr className="solid pb-5"></hr>
            <h2 className='text-xl font-bold pb-3'>
                Install dependencies
            </h2>
            <div className='relative' >
                <SyntaxHighlighter className='codes overflow overflow-auto ml-5' language="powershell" style={atomOneDark} customStyle={{
                                backgroundColor: "#18181b",
                                borderRadius: "10px",
                                padding: "15px",
                                width: "100%",
                                }}>
                {dependencies}
                </SyntaxHighlighter>
                <button className='p-2 absolute right-0 top-3 hover:bg-[#3f3f46] transition-colors duration-200 rounded-sm' onClick={async () => {navigator.clipboard.writeText(dependencies)}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard h-3 w-3"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path></svg>
                </button>
            </div>
            <h2 className='text-xl font-bold py-3 pt-10'>
            Copy the CSS Markup
            </h2>
            <div className='pb-2'>&quot;components\animated-card\animatedcard.module.css&quot;</div>
            <div className='relative'>
                <SyntaxHighlighter id="maincode" className='codes overflow overflow-auto max-h-96 ml-5' language="javascript" style={atomOneDark} customStyle={{
                                backgroundColor: "#18181b",
                                borderRadius: "10px",
                                padding: "15px",
                                width: "100%",
                                }}>
                {code}
                </SyntaxHighlighter>
                <button className='p-2 absolute right-0 top-3 hover:bg-[#3f3f46] transition-colors duration-200 rounded-sm' onClick={async () => {navigator.clipboard.writeText(code)}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard h-3 w-3"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path></svg>
                </button>
              <h2 className='text-xl font-bold py-3 pt-10'>
            Copy the JSX Source Code
            </h2>
            <div className='pb-2'>&quot;components\animated-card\animatedcard.jsx&quot;</div>
            <div className='relative'>
                <SyntaxHighlighter id="maincode" className='codes overflow overflow-auto max-h-96 ml-5' language="javascript" style={atomOneDark} customStyle={{
                                backgroundColor: "#18181b",
                                borderRadius: "10px",
                                padding: "15px",
                                width: "100%",
                                }}>
                {code2}
                </SyntaxHighlighter>
                <button className='p-2 absolute right-0 top-3 hover:bg-[#3f3f46] transition-colors duration-200 rounded-sm' onClick={async () => {navigator.clipboard.writeText(code)}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard h-3 w-3"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path></svg>
                </button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default AnimatedCard
