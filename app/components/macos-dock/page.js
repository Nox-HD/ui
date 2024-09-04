import React from 'react'
import Template from '../element-template'
import MacOSDock from './element'

const MacOSDockDocs = () => {
  return (
    <div>
        <Template heading={"macOS Dock"} 
                  subtitle={"The modern dock displayed in macOS Sierra and above"} 
                  element={ <MacOSDock />} 
                  tabcode={`import React from 'react'
import MacDock from '@/components/macos-dock/macosdock'

const App = () => {
  return (
    <div>
      <MacDock />
    </div>
  )
}

export default App`} 
                  dependencies={"npm i framer-motion"} 
                  csscode={""} 
                  jsxcode={`'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useRef } from 'react'
import { useTransform, useMotionValue } from 'framer-motion'

const MacDock = () => {
  const ref = useRef(null)
  const x = useMotionValue(0);
  const scaleX = useTransform(x, [0, 1], [-3, 3]);

  const mouseMove = (e) => {
    if (!ref.current) return;
    const iconLeft = e.currentTarget.getBoundingClientRect().left;
    const iconWidth = e.currentTarget.getBoundingClientRect().width;
    const cursorWhere = (e.clientX - iconLeft) / iconWidth;

    x.set(cursorWhere);
    ref.current.style.setProperty("--dock-right", \`\${scaleX.get()}px\`\)
    ref.current.style.setProperty("--dock-left", \`\${scaleX.get() * -1}px\`\)
  };

  return (
    <div  ref={ref} className='flex bg-[#393939] bg-opacity-25 border rounded-2xl max-h-[60] p-2 relative'>
      {[
        'finder', 'firefox', 'tidal', 'vscode', 
        'xd', 'pycharm', 'netflix', 'spotify'
      ].map((icon) => (
        <div onMouseMove={mouseMove} className='image'>
          <Image 
            src={\`/macicons/\${icon}.png\`} 
            layout="fill"
            sizes="5vw"
            alt='icons'
          />
        </div>
      ))}

      <style jsx>{\`\.image {
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
      \`\}</style>
    </div>
  )
}

export default MacDock`} 
                  jsxlocation={"components/macos-dock/macosdock.jsx"} 
                  csslocation={""}
        />
    </div>
  )
}

export default MacOSDockDocs