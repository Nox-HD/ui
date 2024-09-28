'use client'
import React, { useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

const GlitchCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const img = new Image();
    let w;
    let h;
    let glitchInterval;
    let offset;

    const randInt = (a, b) => Math.floor(Math.random() * (b - a) + a);

    const clear = () => {
      context.rect(0, 0, w, h);
      context.fill();
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
      canvas.width = w = window.innerWidth;
      offset = w * 0.1;

      canvas.height = h = Math.floor(
        650 * ((w - offset * 2) / img.width)
      );

      glitchInterval = setInterval(() => {
        clear();
        context.drawImage(
          img,
          0,
          0,
          img.width,
          750,
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
  }, []);

  return (
    <div className="bg-black">
      <canvas
        id="canvas"
        ref={canvasRef}
        className={twMerge('m-5 mx-auto block')}
      ></canvas>
    </div>
  );
};

export default GlitchCanvas;
