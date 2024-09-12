'use client'
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Card = ({ title, content, icon }) => {
  const variants = {
    hover: {
      scale: 1.1
    }
  }
  return (
    <motion.div whileHover="hover" className="card bg-white/10 rounded-lg cursor-pointer flex justify-center items-center flex-col h-[260px] relative w-full max-w-[300px] mx-auto">
      <motion.div className="card-content translate-x-[0.5px] bg-[rgb(23,23,23)] rounded-lg flex flex-col flex-grow inset-[1px] p-[20px] absolute z-[2]">
        <motion.div variants={variants} className='w-full flex mt-5 opacity-60 justify-center items-center h-full'> 
          <Image className='invert' src={icon} height={80} width={80} />
        </motion.div>
        <div className='w-11/12 h-full flex flex-col justify-end'>
          <h2 className="text-white text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-300">{content}</p>
        </div>        
      </motion.div>
    </motion.div>
  );
};

const CardContainer = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const cards = container.getElementsByClassName('card');

    const handleMouseMove = (e) => {
      for (const card of cards) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      }
    };

    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="flex items-center justify-center bg-black overflow-hidden p-5">
      <div
        ref={containerRef}
        id="cards"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-w-[916px] w-full"
      >
        {children}
      </div>
      <style jsx global>{`
        #cards:hover > .card::after {
          opacity: 1;
        }
        .card:hover::before {
          opacity: 1;
        }
        .card::before,
        .card::after {
          border-radius: inherit;
          content: "";
          height: 100%;
          left: 0px;
          opacity: 0;
          position: absolute;
          top: 0px;
          transition: opacity 500ms;
          width: 100%;
        }
        .card::before {
          background: radial-gradient(
            800px circle at var(--mouse-x) var(--mouse-y), 
            rgba(255, 255, 255, 0.06),
            transparent 40%
          );
          z-index: 3;
        }
        .card::after {  
          background: radial-gradient(
            600px circle at var(--mouse-x) var(--mouse-y), 
            rgba(255, 255, 255, 0.4),
            transparent 40%
          );
          z-index: 1;
        }
      `}</style>
    </div>
  );
};

const MagicalBento = ({ cardData }) => {
  return (
    <CardContainer>
      {cardData.map((card, index) => (
        <Card key={index} title={card.title} content={card.content} icon={card.icon} />
      ))}
    </CardContainer>
  );
};

export default MagicalBento;