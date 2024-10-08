'use client'
import React, { useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

const GlitchCanvas = ({ maxWidth = 800, maxHeight = 600 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let w, h, offset;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const img = new Image();
    let glitchInterval;

    const randInt = (a, b) => Math.floor(Math.random() * (b - a) + a);

    const clear = () => {
      context.clearRect(0, 0, w, h);
    };

    const glitchImg = () => {
      for (let i = 0; i < randInt(1, 13); i++) {
        const x = Math.random() * w;
        const y = Math.random() * h;
        const spliceWidth = w - x;
        const spliceHeight = randInt(5, h / 3);
        context.drawImage(
          canvas,
          0,
          y,
          spliceWidth,
          spliceHeight,
          x,
          y,
          spliceWidth,
          spliceHeight
        );
        context.drawImage(
          canvas,
          spliceWidth,
          y,
          x,
          spliceHeight,
          0,
          y,
          x,
          spliceHeight
        );
      }
    };

    const init = () => {
      clearInterval(glitchInterval);

      // Get available width and height
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // Set canvas dimensions based on maxWidth and maxHeight
      w = Math.min(windowWidth, maxWidth);
      h = Math.min(windowHeight, maxHeight);

      // Adjust width and height to maintain the image's aspect ratio
      const imgAspectRatio = img.width / img.height;
      const canvasAspectRatio = w / h;

      if (canvasAspectRatio > imgAspectRatio) {
        // Canvas is wider than image, adjust width
        w = h * imgAspectRatio;
      } else {
        // Canvas is taller than image, adjust height
        h = w / imgAspectRatio;
      }

      canvas.width = w;
      canvas.height = h;

      offset = w * 0.1;

      glitchInterval = setInterval(() => {
        clear();
        context.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          offset,
          0,
          w - offset * 2,
          h
        );
        setTimeout(glitchImg, randInt(250, 1000));
      }, 500);
    };

    img.onload = () => {
      init();
      window.addEventListener('resize', init);
    };

    img.src =
      '/2.svg';

    return () => {
      clearInterval(glitchInterval);
      window.removeEventListener('resize', init);
    };
  }, [maxWidth, maxHeight]);

  return (
    <div className="bg-black">
      <canvas ref={canvasRef} className={twMerge('m-5 mx-auto block')}></canvas>
    </div>
  );
};

export default GlitchCanvas;
