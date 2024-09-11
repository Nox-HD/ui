import React from 'react';
import Element from './element';
import Template from '../element-template';

const AwardsCarousel = () => {
  return (
    <div>
        <Template heading={"Simple Bento Grid"} 
                  subtitle={"Modern Colorful Bento Grid Inspired by GitHub Copilot Website"} 
                  element={<Element />} 
                  tabcode={`import React from 'react'
import SimpleBentoGrid from '@/components/simple-bento-grid/simplebentogrid'

const App = () => {
  return (
    <div>
      <SimpleBentoGrid />
    </div>
  )
}

export default App`} 
                  dependencies={"npm i framer-motion"} 
                  csscode={""} 
                  jsxcode={`'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const SimpleBentoGrid = () => {
  const variants = {
    hover: {
      scaleX: 62,
    }
  };
  
  const variants2 = {
    hover: {
      scaleX: 71,
    }
  };

  return (
    <div className="w-full h-screen p-10"> 
      <div className="grid md:grid-cols-5 md:grid-rows-[10] h-full gap-x-6 gap-y-6">
        <div className="md:col-span-3 md:row-span-5 w-full h-full rounded-2xl overflow-hidden relative">
          <div className="bg-[hsla(117,40%,15%,1)] w-full h-full bg-[radial-gradient(circle_at_3%_92%,hsla(161,100%,50%,1)_0%,transparent_67%),radial-gradient(circle_at_46%_94%,hsla(227.6470588235294,100%,50%,1)_0%,transparent_81%),radial-gradient(circle_at_93%_95%,hsla(230.2941176470588,100%,23%,1)_0%,transparent_66%),radial-gradient(circle_at_89%_8%,hsla(243.52941176470586,100%,9%,1)_0%,transparent_150%)] bg-blend-normal"/>
          <div className='text-4xl absolute top-7 left-7 w-10/12 font-extrabold'>
            Proven to increase developer productivity and accelerate the pace of software development.
          </div>
          <Link href="#">
            <motion.div whileHover="hover" className='absolute left-7 bottom-7 font-bold'>
              Read the Research
              <motion.div initial={{ scaleX: 0 }} variants={variants} transition={{ type: "tween", ease: "easeInOut" }} className=' bg-white h-0.5 w-0.5 origin-left absolute'></motion.div>
            </motion.div>
          </Link>
        </div>
        
        <div className="md:col-span-2 md:row-span-3 rounded-2xl overflow-hidden relative bg-[radial-gradient(circle_at_44px_44px,_#00005B_10%,_#000_90%)]">
          <div className='rounded-full w-14 h-14 overflow-hidden absolute top-7 left-7'>
            <div className="bg-[hsla(117,40%,15%,1)] flex justify-center items-center w-full h-full bg-[radial-gradient(circle_at_3%_92%,hsla(161,100%,50%,1)_0%,transparent_67%),radial-gradient(circle_at_46%_94%,hsla(227.6470588235294,100%,50%,1)_0%,transparent_81%),radial-gradient(circle_at_93%_95%,hsla(230.2941176470588,100%,23%,1)_0%,transparent_66%),radial-gradient(circle_at_89%_8%,hsla(243.52941176470586,100%,9%,1)_0%,transparent_150%)] bg-blend-normal"/>
            <div className='bg-black rounded-full flex justify-center items-center w-[52px] h-[52px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>
            </div>
          </div>
          <div className='text-6xl absolute font-bold bottom-11 left-7'>
            55%
          </div>
          <div className='absolute bottom-6 opacity-75 left-7'>
            Faster Coding
          </div>
        </div>
        
        <div className="relative md:col-span-2 md:row-span-5 w-full h-full overflow-hidden rounded-2xl">
          <div className="bg-[hsla(117,40%,15%,1)] w-full h-full bg-[radial-gradient(circle_at_3%_92%,hsla(161,100%,50%,1)_0%,transparent_67%),radial-gradient(circle_at_46%_94%,hsla(227.6470588235294,100%,50%,1)_0%,transparent_81%),radial-gradient(circle_at_93%_95%,hsla(230.2941176470588,100%,23%,1)_0%,transparent_66%),radial-gradient(circle_at_89%_8%,hsla(243.52941176470586,100%,9%,1)_0%,transparent_150%)] bg-blend-normal"/>
          <div className='text-4xl absolute top-7 left-7 w-10/12 font-extrabold'>
            Committed to your privacy, security & trust
          </div>
          <Link href="#">
            <motion.div whileHover="hover" className='absolute left-7 bottom-7 font-bold'>
              Visit the Trust Center
              <motion.div initial={{ scaleX: 0 }} variants={variants2} transition={{ type: "tween", ease: "easeInOut" }} className=' bg-white h-0.5 w-0.5 origin-left absolute'></motion.div>
            </motion.div>
          </Link>
        </div>   
        
        <div className="md:col-span-3 overflow-hidden relative md:row-span-3 w-full h-full rounded-2xl">
          <div className="w-full h-full relative bg-[radial-gradient(circle_at_44px_44px,_#00005B_10%,_#000_90%)]"></div>
          <div className="bg-[hsla(65,0%,0%,1)] w-full h-full bg-[radial-gradient(circle_at_24%_86%,hsla(13,0%,0%,1)_2%,transparent_83%),radial-gradient(circle_at_11%_94%,hsla(43,0%,0%,1)_16%,transparent_51%),radial-gradient(circle_at_36%_38%,hsla(81,0%,0%,1)_3%,transparent_59%),radial-gradient(circle_at_2%_-16%,hsla(174,100%,19%,1)_3.45%,transparent_83%)] bg-blend-normal">
          </div>
          <div className="bg-[hsla(65,0%,0%,1)] w-full h-full bg-[radial-gradient(circle_at_24%_86%,hsla(13,0%,0%,1)_2%,transparent_83%),radial-gradient(circle_at_11%_94%,hsla(43,0%,0%,1)_16%,transparent_51%),radial-gradient(circle_at_36%_38%,hsla(81,0%,0%,1)_3%,transparent_59%),radial-gradient(circle_at_2%_-16%,hsla(174,100%,19%,1)_3.45%,transparent_83%)] bg-blend-normal" />
          <div className='rounded-full w-14 h-14 overflow-hidden absolute top-7 left-7'>
            <div className="bg-[hsla(117,40%,15%,1)] flex justify-center items-center w-full h-full bg-[radial-gradient(circle_at_3%_92%,hsla(161,100%,50%,1)_0%,transparent_67%),radial-gradient(circle_at_46%_94%,hsla(227.6470588235294,100%,50%,1)_0%,transparent_81%),radial-gradient(circle_at_93%_95%,hsla(230.2941176470588,100%,23%,1)_0%,transparent_66%),radial-gradient(circle_at_89%_8%,hsla(243.52941176470586,100%,9%,1)_0%,transparent_150%)] bg-blend-normal"/>
            <div className='bg-black rounded-full flex justify-center items-center w-[52px] h-[52px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>            
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide absolute opacity-75 top-[44px] left-28 lucide-chrome"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="21.17" x2="12" y1="8" y2="8"/><line x1="3.95" x2="8.54" y1="6.06" y2="14"/><line x1="10.88" x2="15.46" y1="21.94" y2="14"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide absolute opacity-75 top-[44px] left-40 lucide-cast"><path d="M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"/><path d="M2 12a9 9 0 0 1 8 8"/><path d="M2 16a5 5 0 0 1 4 4"/><line x1="2" x2="2.01" y1="20" y2="20"/></svg>
          <div className='text-4xl absolute font-bold bottom-7 w-96 left-7'>
            Coding. Redefined.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleBentoGrid;
`} 
                  jsxlocation={"components/simple-bento-grid/simplebentogrid.jsx"} 
                  csslocation={""}
        />
    </div>
  );
};

export default AwardsCarousel;