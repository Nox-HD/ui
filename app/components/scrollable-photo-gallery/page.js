import React from 'react';
import TemplateNoCentre from '../element-template-nocentre';
import Element from './element';

const AwardsCarousel = () => {
  return (
    <div>
        <TemplateNoCentre heading={"Scrollable Photo Gallery"} 
                  subtitle={""} 
                  element={<Element />} 
                  tabcode={``} 
                  dependencies={""} 
                  csscode={""} 
                  jsxcode={``} 
                  jsxlocation={""} 
                  csslocation={""}
        />
    </div>
  );
};

export default AwardsCarousel;