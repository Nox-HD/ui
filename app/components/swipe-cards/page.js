import React from 'react';
import Template from '../element-template';
import Element from './element';

const AwardsCarousel = () => {
  return (
    <div>
        <Template heading={"Swiping Cards"} 
                  subtitle={"Swipe Through Cards with Images Just Like in the Tinder App"} 
                  element={<Element />} 
                  tabcode={``} 
                  dependencies={"npm i classnames framer-motion"} 
                  csscode={""} 
                  jsxcode={``} 
                  jsxlocation={""} 
                  csslocation={""}
        />
    </div>
  );
};

export default AwardsCarousel;