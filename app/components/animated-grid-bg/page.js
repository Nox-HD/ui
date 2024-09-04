import React from 'react'
import TemplateX from '../element-template-nodep'
import Element from './element'

const AnimatedGrid = () => {
  return (
    <div>
        <TemplateX heading={"Animated Grid Background"} 
                  subtitle={"Interactive Grid Design with Mouse Trailing Seamless Animations."} 
                  element={<Element />} 
                  tabcode={`import React from 'react'
import AnimatedGridBG from '@/components/animated-grid-bg/animatedgridbg'

const App = () => {
  return (
    <div>
      <AnimatedGridBG word="The Hero Section" />
    </div>
  )
}

export default App`} 
                  csscode={""} 
                  jsxcode={`'use client'
import React, { useEffect, useRef } from 'react'

const AnimatedGridBG = ({word}) => {
  const containerRef = useRef(null);
  const tileRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const tile = tileRef.current;

    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;
    const tileSize = 32; 
    const numTilesX = Math.ceil(containerWidth / tileSize);
    const numTilesY = Math.ceil(containerHeight / tileSize);

    container.style.gridTemplateColumns = \`repeat(\${numTilesX}, 1fr)\`;
    container.style.gridTemplateRows = \`repeat(\${numTilesY}, 1fr)\`;

    for (let y = 0; y < numTilesY; y++) {
      for (let x = 0; x < numTilesX; x++) {
        const newTile = tile.cloneNode(true);
        container.appendChild(newTile);
      }
    }
  }, []);

  return (
    <div className='overflow-hidden relative w-full h-full [mask-image:radial-gradient(ellipse_50%_50%_at_center,black_0%,rgba(0,0,0,0.6)_50%,rgba(0,0,0,0)_100%)]'>
        <div
          id="container"
          ref={containerRef}
          className="w-full h-full grid gap-0"
        >
          <div className='z-50 w-max pointer-events-none font-bold text-white text-[5em] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
              {word}
          </div>
          <div
            ref={tileRef}
            className="tile border-r-[1px] border-b-[1px] min-w-8 min-h-8 hover:bg-stone-400 hover:duration-0 duration-700"
          />
        </div>
    </div>
  );
};

export default AnimatedGridBG;`} 
                  jsxlocation={"components/animated-grid-bg/animatedgridbg.jsx"} 
                  csslocation={""}
        />
    </div>
  )
}

export default AnimatedGrid