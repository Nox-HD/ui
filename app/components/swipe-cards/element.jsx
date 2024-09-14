'use client'
import React, { useState } from 'react'
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion'
import classNames from 'classnames'

const SWIPE_THRESHOLD = 330

const Element = () => {
  const Images = ["/Images/image1.jpg", "/Images/image2.jpg", "/Images/image3.jpg"]
  const [currentIndex, setCurrentIndex] = useState(0)

  const dragX = useMotionValue(0)

  const onDragEnd = (_, info) => {
    const offset = info.offset.x
    if (Math.abs(offset) > SWIPE_THRESHOLD) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Images.length)
      dragX.set(0)
    }
  }

  const rotate = useTransform(dragX, [-200, 200], [-15, 15], { clamp: true })

  return (
    <div className='h-[85vh] relative flex justify-center items-center'>
      <div className='h-[75vh] w-[22vw] relative'>
        <AnimatePresence initial={true}>
          {Images.map((image, index) => (
            <motion.div
              key={index}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                rotate: index === currentIndex ? rotate : 0,
                boxShadow: 10 
              }}
              drag={index === currentIndex ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={onDragEnd}
              initial={index === currentIndex ? { scale: 0.95, opacity: 0 } : null }
              animate={index === currentIndex ? { scale: 1, opacity: 1, y: 0 } : { scale: 0.95, opacity: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={classNames(
                'cursor-grab active:cursor-grabbing rounded-2xl',
                index === currentIndex ? "z-10" : "z-0"
              )}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Element