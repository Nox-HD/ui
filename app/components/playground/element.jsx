'use client'
import React from 'react'
import gsap from 'gsap'

const Playground = () => {
    const handleMouseHover = (e) => {
        gsap.to(e.currentTarget, {
            yPercent: -100,
        });
    }

    const handleMouseLeave = (e) => {
        gsap.to(e.currentTarget, {
            yPercent: 0,
        });
    }

    return (
        <div className='container'>
            <ul className='flex flex-col text-3xl gap-y-7'>
                {["Homepage", "About Us", "Contact Us", "Privacy Policy"].map((title, index) => (
                    <div>
                        <li className='z-0 origin-bottom' 
                            onMouseEnter={handleMouseHover} 
                            onMouseLeave={handleMouseLeave} 
                            key={title}
                        >
                            {title}
                        </li>
                        
                        <div className='min-w-full bg-[#a7a7a7] linebreak min-h-[0.5px]'></div>
                    </div>
                ))} 
            </ul>
        </div>
    )
}

export default Playground
