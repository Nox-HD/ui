'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
  "/programming/framer-motion.svg",
  "/programming/git-icon.svg",
  "/programming/typescript.svg",
  "/programming/python-5.svg",
  "/programming/react-2.svg",
  "/programming/nodejs-icon.svg",
  "/programming/tensorflow-2.svg"
];

const ScrollingItems = () => {
  return (
    <div className="w-[90%] max-w-[1536px] mx-auto relative h-[100px] mt-20 overflow-hidden">
      {images.map((src, index) => (
        <motion.div
          key={src}
          className="w-[200px] h-[100px] absolute flex items-center justify-center"
          animate={{ left: '-200px' }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <Image
            src={src}
            alt={`Programming logo ${index + 1}`}
            width={80}
            height={80}
            className="object-contain"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ScrollingItems;