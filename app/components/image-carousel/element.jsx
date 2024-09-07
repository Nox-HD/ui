'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useMotionValue } from 'framer-motion';
import classNames from 'classnames';

const Element = ({ Images }) => {
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
    <div className='w-full rounded-xl  border relative p-3 pb-10'>
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        animate={{ translateX: `-${imgIndex * 100}%` }}
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
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: 'calc(100% - 5rem)'
            }}
          />
        ))}
      </motion.div>
      <div className='flex justify-center h-full mt-2 gap-x-2'>
        {Images.map((image, index) => (
          <div key={index} onClick={() => setImgIndex(index)} className={classNames('cursor-pointer flex h-0.5 w-3 transition-[width] duration-500',
            imgIndex === index ? "bg-white w-5" : "bg-stone-500 w-2 hover:w-3"
          )}></div>
        ))}
      </div>
    </div>
  );
};

export default Element;
