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
        element={ <div className='flex justify-center items-center'>
          <MagneticIcons> <Image className='m-10 opacity-75' src="/instagram-2016-5.svg" height="60" width="60" alt="Git icon"/> </MagneticIcons> 
          <MagneticIcons> <Image className='m-10 opacity-75' src="/apple-14.svg" height="50" width="50" alt="LinkedIn icon" /> </MagneticIcons> 
          <MagneticIcons> <Image className='m-10 opacity-75' src="/tiktok-plain-1.svg" height="50" width="50" alt="Next.js icon" /> </MagneticIcons> 
          <MagneticIcons> <Image className='m-10 opacity-75 invert' src="/noxhd.svg" height="70" width="70" alt="Next.js icon" /> </MagneticIcons> 
          </div>
        }
        tabcode={`import MagneticIcons from './magneticicons'

<div className='flex justify-center items-center'>
    <MagneticIcons> <Image className='m-10 opacity-75' src="/instagram-2016-5.svg" height="60" width="60" alt="Git icon" /> </MagneticIcons> 
    <MagneticIcons> <Image className='m-10 opacity-75' src="/apple-14.svg" height="50" width="50" alt="LinkedIn icon" /> </MagneticIcons> 
    <MagneticIcons> <Image className='m-10 opacity-75' src="/tiktok-plain-1.svg" height="50" width="50" alt="Next.js icon" /> </MagneticIcons> 
    <MagneticIcons> <Image className='m-10 opacity-75 invert' src="/noxhd.svg" height="70" width="70" alt="Next.js icon" /> </MagneticIcons> 
</div>`}
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