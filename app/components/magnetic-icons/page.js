import React from 'react'
import Template from '../element-template'
import MagneticIcons from './element'
import Image from 'next/image'

const MagneticIconsPage = () => {
  return (
    <div>
      <Template 
        heading="Magnetic Icons"
        subtitle="Interactive icons with magnetic hover effects."
        element={ <div className="flex justify-center items-center py-20 md:py-0">
          <MagneticIcons>
            <Image
              className="m-5 md:m-10 opacity-75 md:w-20 md:h-20 w-10 h-10"
              src="/instagram-2016-5.svg"
              alt="Instagram icon"
              width={30}
              height={30}
            />
          </MagneticIcons>
          <MagneticIcons>
            <Image
              className="m-5 md:m-10 opacity-75  md:w-[4.5rem] md:h-[4.5rem] w-10 h-10"
              src="/apple-14.svg"
              alt="Apple icon"
              width={30}
              height={30}
            />
          </MagneticIcons>
          <MagneticIcons>
            <Image
              className="m-5 md:m-10 opacity-75  md:w-[4.5rem] md:h-[4.5rem] w-10 h-10"
              src="/tiktok-plain-1.svg"
              alt="TikTok icon"
              width={30}
              height={30}
            />
          </MagneticIcons>
          <MagneticIcons>
            <Image
              className="m-5 md:m-10 opacity-75 invert md:w-20 md:h-20 w-10 h-10"
              src="/noxhd.svg"
              alt="Nox icon"
              width={30}
              height={30}
            />
          </MagneticIcons>
        </div>
        
        }
        tabcode={`import React from "react";
import MagneticIcons from "./magneticicons";

const App = () => {
  return (
    <div>
      <div className="flex justify-center items-center py-20 md:py-0">
        <MagneticIcons>
          <Image
            className="m-5 md:m-10 opacity-75 md:w-20 md:h-20 w-10 h-10"
            src="/instagram-2016-5.svg"
            alt="Instagram icon"
            width={30}
            height={30}
          />
        </MagneticIcons>
        <MagneticIcons>
          <Image
            className="m-5 md:m-10 opacity-75  md:w-[4.5rem] md:h-[4.5rem] w-10 h-10"
            src="/apple-14.svg"
            alt="Apple icon"
            width={30}
            height={30}
          />
        </MagneticIcons>
        <MagneticIcons>
          <Image
            className="m-5 md:m-10 opacity-75  md:w-[4.5rem] md:h-[4.5rem] w-10 h-10"
            src="/tiktok-plain-1.svg"
            alt="TikTok icon"
            width={30}
            height={30}
          />
        </MagneticIcons>
        <MagneticIcons>
          <Image
            className="m-5 md:m-10 opacity-75 invert md:w-20 md:h-20 w-10 h-10"
            src="/noxhd.svg"
            alt="Nox icon"
            width={30}
            height={30}
          />
        </MagneticIcons>
      </div>
    </div>
  );
};

export default App;
`}
        dependencies={`npm i framer-motion`}
        csscode=""
        jsxcode={`'use client'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion';

export default function MagneticIcons({children}) {
    const ref = useRef(null);
    const [position, setPosition] = useState({x:0,y:0});

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const {height, width, left, top} = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width/2)
        const middleY = clientY - (top + height/2)
        setPosition({x: middleX, y: middleY})
    }

    const reset = () => {
        setPosition({x:0, y:0})
    }

    const { x, y } = position;
    return (
        <motion.div
            style={{position: "relative"}}
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{x, y}}
            transition={{type: "spring", stiffness: 150, damping: 15, mass: 0.1}}
        >
            {children}
        </motion.div>
    )
}`}
        jsxlocation={`"components/magnetic-icons/magneticicons.jsx"`}
        csslocation=""
        />
    </div>
  )
}

export default MagneticIconsPage