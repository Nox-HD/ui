'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useRef, useEffect } from 'react'
import { useTransform, useMotionValue } from 'framer-motion'

const MacOSDock = () => {
  const ref = useRef(null)
  const x = useMotionValue(0);
  const scaleX = useTransform(x, [0, 1], [-3, 3]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const mouseMove = (e) => {
    if (!ref.current) return;
    const iconLeft = e.currentTarget.getBoundingClientRect().left;
    const iconWidth = e.currentTarget.getBoundingClientRect().width;
    const cursorWhere = (e.clientX - iconLeft) / iconWidth;

    x.set(cursorWhere);
    ref.current.style.setProperty("--dock-right", `${scaleX.get()}px`)
    ref.current.style.setProperty("--dock-left", `${scaleX.get() * -1}px`)
  };

  return (
    <div  ref={ref} className='flex bg-[#393939] bg-opacity-25 border rounded-2xl max-h-[60] m-10 p-2 md:m-0 relative'>
      {isMobile ? ([
        'finder', 'notion', 'vmware'
      ].map((icon) => (
        <div key={icon.id} onMouseMove={mouseMove} className='image'>
          <Image 
            src={`/macicons/${icon}.png`} 
            layout="fill"
            sizes="5vw"
            alt='icons'
          />
        </div>
      ))) : ([
        'finder', 'notion', 'vmware', 'vscode', 
        'pr', 'pycharm', 'firefox', 'spotify'
      ].map((icon) => (
        <div key={icon.id} onMouseMove={mouseMove} className='image'>
          <Image 
            src={`/macicons/${icon}.png`} 
            layout="fill"
            sizes="5vw"
            alt='icons'
          />
        </div>
      ))) }

      <style jsx>{`
        .image {
          position: relative;
          width: 60px;
          height: 60px;
          transition: width 200ms cubic-bezier(0.25, 1, 0.25, 1),
              height 200ms cubic-bezier(0.25, 1, 0.25, 1),
              margin-top 300ms cubic-bezier(0.25, 1, 0.25, 1);
        }

        .image:hover + .image {
          width: calc(70px + var(--dock-right, 0px));
          height: calc(70px + var(--dock-right, 0px));
          margin-top: calc(-15px + var(--dock-right, 0px) * -1 );
        }

        .image:has(+ .image:hover) {
          width: calc(70px + var(--dock-left, 0px));
          height: calc(70px + var(--dock-left, 0px));
          margin-top: calc(-15px + var(--dock-left, 0px) * -1 );
        }

        .image:has(+ .image + .image:hover) {
          width: calc(65px + var(--dock-left, 0px));
          height: calc(65px + var(--dock-left, 0px));
          margin-top: calc(-10px + var(--dock-left, 0px) * -1 );
        }

        .image:hover + .image + .image {
          width: calc(65px + var(--dock-right, 0px));
          height: calc(65px + var(--dock-right, 0px));
          margin-top: calc(-10px + var(--dock-right, 0px) * -1 );
        }

        .image:hover {
          width: 80px;
          height: 80px;
          margin-top: -30px;
        }
      `}</style>
    </div>
  )
}

export default MacOSDock