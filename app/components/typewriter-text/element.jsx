"use client";
import { useState, useEffect } from "react";

const TypingEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, 100);

      return () => clearTimeout(typingTimeout);
    }
  }, [index, text]);

  const restartTyping = () => {
    setDisplayedText("");
    setIndex(0);
  };

  return (
    <div className="flex items-center justify-center h-full text-white">
      <div className="relative flex w-full items-center justify-center text-center h-full">
        <button
          onClick={restartTyping}
          className="absolute top-10 right-10 transform text-4xl text-gray-400 hover:text-gray-300 focus:outline-none"
        >
          &#8635;
        </button>
        <div className="text-5xl font-mono">{displayedText}</div>
      </div>
    </div>
  );
};

export default TypingEffect;
