'use client'
import React, { useState, useEffect } from 'react'
import gsap from 'gsap'
import Link from 'next/link'
import classNames from 'classnames'

const Playground = () => {
    const [hamburger, setHamburger] = useState(true)

    useEffect(() => {
        const ul = document.querySelector(".ul")
        const listItems = ul.querySelectorAll("li")
        const background = document.querySelector(".background")

        hamburger === true ? (
            gsap.to(background, {
                x: 0,
                duration: 0.5,
                ease: "expo.inOut",
                
            }),
            gsap.to(listItems, {
                x: 0,
                duration: 0.5,
                ease: "expo.inOut",
                onStart: () => { ul.style.setProperty("visibility", "visible") },
                stagger: 0.1,
            })
        )
        : 
        (
            gsap.to(background, {
                x: -1000,
                duration: 0.5,
                ease: "expo.inOut",
                delay: .5
            }),
            gsap.to(listItems, {
                x: -320,
                duration: 0.5,
                ease: "expo.inOut",
                onComplete: () => { ul.style.setProperty("visibility", "hidden") },
                stagger: 0.1,
            }
            )
        )

        const query = gsap.utils.toArray('li a')

        query.forEach((link) => {
            const tl = gsap.timeline({
                defaults: {
                    duration: 0.5,
                    ease: "power4.inOut",
                },
            })
            const primary = link.querySelector(".primary")
            const secondary = link.querySelector(".secondry")
            const line = link.querySelector(".line")

            tl  
                .to(primary, {
                y: -200,
                })
                .to(secondary, {
                    y: -40,
                }, "<")
                .to(line, {
                    x: 20,
                }, "<")

            tl.pause()

            link.addEventListener("mousemove", () => {
                tl.play()
            })

            link.addEventListener("mouseleave", () => {
                tl.reverse()
            })
        })
    }, [hamburger])

    return (
        <div className='container relative flex items-center h-full text-4xl text-white'>
            <div className='z-50 sidebar'>
                <div className='absolute flex cursor-pointer top-10 right-10' onClick={() => { setHamburger(!hamburger)}}>
                <div className={`p-2 rounded-md 
                                transition-all duration-500 delay-100 ease-in-out
                                ${hamburger ? "text-white hover:bg-neutral-800" : "text-black hover:bg-neutral-200"}
                                `}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" 
                                y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                    </div>            
                </div>
                <ul className='flex flex-col transition-colors duration-50 ul gap-y-6'>
                    <li className='overflow-hidden'>
                        <Link href="#" className='relative flex flex-col overflow-hidden h-[40px]'>
                            <div className='absolute bg-white opacity-75 min-w-10 top-1/2 -left-10 min-h-0.5 line'></div>
                            <p className='pl-8 primary'>Home</p>
                            <p className='pl-8 secondry'>Home</p>
                        </Link>
                    </li>
                    <li className='overflow-hidden'>
                        <Link href="#" className='relative flex flex-col overflow-hidden h-[40px]'>
                            <div className='absolute bg-white opacity-75 min-w-10 top-1/2 -left-10 min-h-0.5 line'></div>
                            <p className='pl-8 primary'>About Us</p>
                            <p className='pl-8 secondry'>About Us</p>
                        </Link>
                    </li>
                    <li className='overflow-hidden'>
                        <Link href="#" className='relative flex flex-col overflow-hidden h-[40px]'>
                            <div className='absolute bg-white opacity-75 min-w-10 top-1/2 -left-10 min-h-0.5 line'></div>
                            <p className='pl-8 primary'>Contact Us</p>
                            <p className='pl-8 secondry'>Contact Us</p>
                        </Link>
                    </li>
                    <li className='overflow-hidden'>
                        <Link href="#" className='relative flex flex-col overflow-hidden h-[40px]'>
                            <div className='absolute bg-white opacity-75 min-w-10 top-1/2 -left-10 min-h-0.5 line'></div>
                            <p className='pl-8 primary'>Privacy Policy</p>
                            <p className='pl-8 secondry'>Privacy Policy</p>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='absolute top-0 left-0 z-0 w-full h-full bg-black background'></div>
        </div>
    )
}

export default Playground
