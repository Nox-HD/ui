import React from 'react'
import TemplateNoCentre from '../element-template-nocentre'
import Element from './element'

const TeamCarouselPage = () => {
  return (
    <div>
        <TemplateNoCentre heading={"Image Carousel"} 
                  subtitle={"Image Carousel to Swipe Through an Array of Beautiful Photos Effortlessly"} 
                  element={<Element Images = {[
                    "/carousel/1.jpg",
                    "/carousel/2.jpg",
                    "/carousel/3.jpg",
                    "/carousel/4.jpg",
                    "/carousel/5.jpg",
                    "/carousel/6.jpg"
                  ]} />} 
                  tabcode={`import React from 'react'
import ImageCarousel from '@/components/image-carousel/imagecarousel'

const App = () => {
  return (
    <div>
      <ImageCarousel Images = {[
                    "/carousel/1.jpg",
                    "/carousel/2.jpg",
                    "/carousel/3.jpg",
                    "/carousel/4.jpg",
                    "/carousel/5.jpg",
                    "/carousel/6.jpg"
                  ]} />
    </div>
  )
}

export default App`} 
                  dependencies={"npm i classnames framer-motion"} 
                  csscode={""} 
                  jsxcode={`'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useMotionValue } from 'framer-motion';
import classNames from 'classnames';

const ImageCarousel = ({ Images }) => {
  const [dragging, setDragging] = useState(false)
  const [imgIndex, setImgIndex] = useState(0);

  const SPRING_OPTIONS = {
    type: "spring",
    mass: 2,
    stiffness: 500,
    damping: 50,
  };

  const DRAG_ALLOWANCE = 50

  const dragX = useMotionValue(0)

  const onDragStart = () => {
    setDragging(true)
  }

  const onDragEnd = () => {
    setDragging(false)

    const x = dragX.get()

    if (x <= -DRAG_ALLOWANCE && imgIndex < Images.length - 1) {
      setImgIndex((e) => e + 1)
    } else if (x >= DRAG_ALLOWANCE && imgIndex > 0) {
      setImgIndex((e) => e - 1)
    }
    
    dragX.set(0);
  }

  return (
    <div className='w-full rounded-xl scale-125 md:scale-100 relative p-3 pb-10'>
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        animate={{ translateX: \`-\${imgIndex * 100}%\` }}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        className='flex w-full h-full '
        style={{ x: dragX }}
        transition={SPRING_OPTIONS}
      >
        {Images.map((image, index) => (
          <div 
            key={index}
            className='w-full flex h-[30vw] shrink-0 cursor-grab active:cursor-grabbing rounded-xl mx-10'
            style={{
              backgroundImage: \`url(\${image})\`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: 'calc(100% - 5rem)'
            }}
          />
        ))}
      </motion.div>
      <div className='flex justify-center content-center mt-2 gap-x-2 h-0.5 group w-36 m-auto'>
        {Images.map((image, index) => (
          <div aria-current={imgIndex === index}  key={index} onClick={() => setImgIndex(index)} className={classNames(
            "cursor-pointer w-[20%] relative [transition:width_var(--transition,400ms_ease-in-out)]",
            "hover:w-[25%] [&:not([aria-current='true'])]:group-hover:[&:not(:hover)]:w-[20%] ",
            "[&[aria-current='true']]:w-[40%] [&[aria-current='true']]:group-hover:w-[40%] origin-center",
            imgIndex === index ? "bg-white" : "bg-stone-500"
          )}></div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;`} 
                  jsxlocation={"components/image-carousel/imagecarousel.jsx"} 
                  csslocation={""}
        />
    </div>
  )
}

export default TeamCarouselPage