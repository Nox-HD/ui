'use client'
import React, { useEffect, useRef } from 'react';
import SplitType from 'split-type';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from '@/components/ui/button';

const StaggeredText = () => {
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef(null);
  const tl = gsap.timeline()

  useEffect(() => {
    const button = document.querySelector(".button")

    const text = new SplitType('#target');
    tl.from(text.chars, {
      opacity: 0.1,
      y: 10,
      stagger: 0.03,
    });
    button.addEventListener("click", () => {
        tl.restart()
    })
  }, []);

  return (
    <div className='about content-center items-center text-center flex relative'>
      <div ref={container} id='target' className='lg:text-5xl text-3xl font-bold text-neutral-200'>
        This is a staggered effect
      </div>
      <div className='button p-2 hover:bg-stone-800 absolute -right-40 mr-2 -top-36 rounded-md'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rotate-ccw"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
      </div>
    </div>
  );
}

export default StaggeredText;
