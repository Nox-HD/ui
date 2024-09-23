import React from 'react';
import Template from '../element-template';
import Element from './element';
import TemplateNoCentre from '../element-template-nocentre';

const AwardsCarousel = () => {
  return (
    <div>
        <TemplateNoCentre heading={""} 
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