import React from 'react'
import Template from '../element-template'
import StaggeredText from './element'

const staggeredText = () => {
  return (
    <div>
        <Template heading={"Staggered Text"} 
                  subtitle={"Dynamic Text Animation with Smooth Staggered Effects."} 
                  element={ <StaggeredText /> } 
                  tabcode={`import React from 'react'
import StaggeredText from '@/components/staggered-text/staggeredtext'

const App = () => {
  return (
    <div>
      <StaggeredText text="This is a staggered effect" />
    </div>
  )
}

export default App`} 
                  dependencies={"npm i split-type gsap"} 
                  csscode={""} 
                  jsxcode={`'use client'
import React, { useEffect } from 'react';
import SplitType from 'split-type';
import { gsap } from "gsap";

const StaggeredText = ({text}) => {
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline()

  useEffect(() => {
    const text = new SplitType('#target');
    tl.from(text.chars, {
      opacity: 0.1,
      y: 10,
      stagger: 0.03,
    });
  }, []);

  return (
    <div className='about content-center items-center text-center flex relative'>
      <div id='target' className='lg:text-5xl text-3xl font-bold text-neutral-200'>
       {text}
      </div>
    </div>
  );
}

export default StaggeredText;
`} 
                  jsxlocation={"/components/staggered-text/staggeredtext"} 
                  csslocation={""}
        />
    </div>
  )
}

export default staggeredText;