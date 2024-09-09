'use client'
import React, { useState, useEffect } from 'react'
import gsap from 'gsap'
import Link from 'next/link'

const Playground = ({MenuItems}) => {
    const [hamburger, setHamburger] = useState(true)

    useEffect(() => {
        const ul = document.querySelector(".ul")
        const listItems = ul.querySelectorAll("li")
        const background = document.querySelector(".background")

        hamburger === true ? (
            gsap.to(background, {
                xPercent: 0,
                duration: 0.5,
                ease: "expo.inOut",
                
            }),
            gsap.to(listItems, {
                xPercent: 0,
                duration: 0.5,
                ease: "expo.inOut",
                onStart: () => { ul.style.setProperty("visibility", "visible") },
                stagger: 0.1,
            })
        )
        : 
        (
            gsap.to(background, {
                xPercent: -100,
                duration: 0.5,
                ease: "expo.inOut",
                delay: .5
            }),
            gsap.to(listItems, {
                xPercent: -150,
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
                    y: -60,
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
        <div className='container relative flex items-center h-screen text-4xl md:text-6xl text-white'>
            <div className='absolute flex text-black -translate-x-1/2 left-1/2'> Content Goes Here. </div>
            <div className='z-10 sidebar'>
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
                <ul className='flex flex-col md:pl-10 transition-colors duration-50 ul gap-y-8 md:gap-y-16'>
                    <li className='overflow-hidden'>
                        <Link href={MenuItems[0].link} className='relative flex flex-col overflow-hidden md:h-[60px]'>
                            <div className='absolute bg-white opacity-75 min-w-10 top-1/2 -translate-y-1/2 -left-10 min-h-0.5 line'></div>
                            <p className='md:pl-8 pl-3 primary'>{MenuItems[0].name}</p>
                            <p className='md:pl-8 pl-3 secondry invisible md:visible absolute md:relative'>{MenuItems[0].name}</p>
                        </Link>
                    </li>
                    <li className='overflow-hidden'>
                        <Link href={`${MenuItems[2].link}`} className='relative flex flex-col overflow-hidden md:h-[60px]'>
                            <div className='absolute bg-white opacity-75 min-w-10 top-1/2 -translate-y-1/2 -left-10 min-h-0.5 line'></div>
                            <p className='md:pl-8 pl-3 primary'>{MenuItems[1].name}</p>
                            <p className='md:pl-8 pl-3 secondry  invisible md:visible absolute md:relative'>{MenuItems[1].name}</p>
                        </Link>
                    </li>
                    <li className='overflow-hidden'>
                        <Link href={`${MenuItems[2].link}`} className='relative flex flex-col overflow-hidden md:h-[60px]'>
                            <div className='absolute bg-white opacity-75 min-w-10 top-1/2 -translate-y-1/2 -left-10 min-h-0.5 line'></div>
                            <p className='md:pl-8 pl-3 primary'>{MenuItems[2].name}</p>
                            <p className='md:pl-8 pl-3 secondry  invisible md:visible absolute md:relative'>{MenuItems[2].name}</p>
                        </Link>
                    </li>
                    <li className='overflow-hidden'>
                        <Link href={`${MenuItems[2].link}`} className='relative flex flex-col overflow-hidden md:h-[60px]'>
                            <div className='absolute bg-white opacity-75 min-w-10 top-1/2 -translate-y-1/2 -left-10 min-h-0.5 line'></div>
                            <p className='md:pl-8 pl-3 primary'>{MenuItems[3].name}</p>
                            <p className='md:pl-8 pl-3 secondry  invisible md:visible absolute md:relative'>{MenuItems[3].name}</p>
                        </Link>
                    </li>
                    <li className='overflow-hidden'>
                        <Link href={`${MenuItems[2].link}`} className='relative flex flex-col overflow-hidden md:h-[60px]'>
                            <div className='absolute bg-white opacity-75 min-w-10 top-1/2 -translate-y-1/2 -left-10 min-h-0.5 line'></div>
                            <p className='md:pl-8 pl-3 primary'>{MenuItems[4].name}</p>
                            <p className='md:pl-8 pl-3 secondry  invisible md:visible absolute md:relative'>{MenuItems[4].name}</p>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='absolute top-0 left-0 z-0 w-full h-full bg-black background'></div>
        </div>
    )
}

export default Playground
