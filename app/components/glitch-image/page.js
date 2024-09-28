import React from 'react';
import GlitchCanvas from './element';
import TemplateX from '../element-template-nodep';

const AwardsCarousel = () => {
  return (
    <div>
        <TemplateX heading={"Glitch Image"} 
                  subtitle={"Dynamic Infinite Glitch Effect on Images"} 
                  element={<GlitchCanvas maxWidth={900} maxHeight={900} image={"/2.svg"} />} 
                  tabcode={`import React from 'react';
import GlitchImage from '@/components/glitch-image/glitchimage';

const App = () => {
  return (
    <div>
      <GlitchCanvas maxWidth={900} maxHeight={900} image={"/logo.svg"} />
    </div>
  );
};

export default App;`} 
                  dependencies={""} 
                  csscode={""} 
                  jsxcode={`'use client'
import React, { useEffect, useRef } from 'react';

const GlitchImage = ({ maxHeight, maxWidth, image }) => {
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

    img.src = image

    return () => {
      clearInterval(glitchInterval);
      window.removeEventListener('resize', init);
    };
  }, [maxWidth, maxHeight]);

  return (
    <div className="bg-black w-full h-full flex justify-center items-center">
      <canvas ref={canvasRef} className='m-5 mx-auto block'></canvas>
    </div>
  );
};

export default GlitchImage;
`} 
                  jsxlocation={"components/glitch-image/glitchimage.jsx"} 
                  csslocation={""}
        />
    </div>
  );
};

export default AwardsCarousel;