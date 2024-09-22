import React from 'react';
import TemplateX from '../element-template-nodep';
import EncryptionCard from './element';

const EncryptedCardPage = () => {
  return (
    <div>
        <TemplateX heading={"Encryption Text"} 
                  subtitle={"Dynamic Text Transformation with Encrypted Letter Animation"} 
                  element={<EncryptionCard word={"ENCRYPTED"}/>} 
                  tabcode={`import React from 'react';
import MagicalBento from '@/components/encrypted-text/encryptedtext';

const App = () => {
  return (
    <div>
      <EncryptedText word={"ENCRYPTED"}/>
    </div>
  );
};

export default App;`} 
                  dependencies={""} 
                  csscode={""} 
                  jsxcode={`'use client';
import React, { useEffect, useRef } from "react";

const EncryptedText = ({ word }) => {
  const headingRef = useRef(null);

  useEffect(() => {
    const heading = headingRef.current;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;

    const handleMouseOver = (event) => {
      let iteration = 0;

      clearInterval(interval);

      interval = setInterval(() => {
        event.target.innerText = event.target.dataset.value
          .split("")
          .map((letter, index) =>
            index < iteration
              ? event.target.dataset.value[index]
              : letters[Math.floor(Math.random() * 26)]
          )
          .join("");

        if (iteration >= event.target.dataset.value.length) {
          clearInterval(interval);
          event.target.innerText = event.target.dataset.value;
        }

        iteration += 1 / 3;
      }, 30);
    };

    heading.addEventListener("mouseover", handleMouseOver);

    return () => {
      heading.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div className="bg-black overflow-hidden h-full flex flex-col justify-center items-center">
      <h1
        ref={headingRef}
        data-value={word}
        className="text-white font-bold text-center"
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "10rem",
          whiteSpace: "nowrap",
          letterSpacing: "0.2rem",
        }}
      >
        {word}
      </h1>
    </div>
  );
};

export default EncryptedText;
`} 
                  jsxlocation={"components/encrypted-text/encryptedtext.jsx"} 
                  csslocation={""}
        />
    </div>
  );
};

export default EncryptedCardPage;