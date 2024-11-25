import React from 'react';
import TemplateX from '../element-template-nodep';
import AnimatedNavBar from '../animated-nav-bar/element';

const AwardsCarousel = () => {

    const navLinks = [
        { text: 'Home', href: '/' },
        { text: 'Our Story', href: '/our-story' },
        { text: 'Studio', href: '/studio' },
        { text: 'Contact', href: '/contact' },
      ];
  return (
    <div>
        <TemplateX heading={"Magnetic Navbar"} 
                  subtitle={""} 
                  element={<AnimatedNavBar links={navLinks} />} 
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