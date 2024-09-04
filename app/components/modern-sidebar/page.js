import React from 'react'
import TemplateWhite from '../element-template-white'
import Playground from './element'

const TeamCarouselPage = () => {
  return (
    <div>
        <TemplateWhite heading={"Modern Sidebar"} 
                  subtitle={"Sidebar with a relaxing animazing as in multiple Awwwards websites."} 
                  element={<Playground 
                    MenuItems={[{name: "Home", 
                                 link: "https://ui.noxhd.com"},
                                 {name: "About Us", 
                                 link: "https://ui.noxhd.com"},
                                 {name: "Contact Us", 
                                 link: "https://ui.noxhd.com"},
                                 {name: "Terms & Conditions", 
                                 link: "https://ui.noxhd.com"},
                                 {name: "Privacy Policy", 
                                 link: "https://ui.noxhd.com"} ]} 
                            />} 
                  tabcode={`import React from 'react'
import ModernSidebar from '@/components/modern-sidebar/modernsidebar'

const App = () => {
  return (
    <div>
      <ModernSidebar 
                    MenuItems={[{name: "Home", 
                                 link: "https://ui.noxhd.com"},
                                 {name: "About Us", 
                                 link: "https://ui.noxhd.com"},
                                 {name: "Contact Us", 
                                 link: "https://ui.noxhd.com"},
                                 {name: "Terms & Conditions", 
                                 link: "https://ui.noxhd.com"},
                                 {name: "Privacy Policy", 
                                 link: "https://ui.noxhd.com"} ]} 
                            />
    </div>
  )
}

export default App`} 
                  dependencies={"npm i gsap"} 
                  csscode={""} 
                  jsxcode={`'use client'
import React, { useState, useEffect } from 'react'
import gsap from 'gsap'
import Link from 'next/link'

const ModernSidebar = ({MenuItems}) => {
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
        <div className='container relative flex items-center h-screen text-6xl text-white'>
            <div className='absolute flex text-black -translate-x-1/2 left-1/2'> Content Goes Here. </div>
            <div className='z-50 sidebar'>
                <div className='absolute flex cursor-pointer top-10 right-10' onClick={() => { setHamburger(!hamburger)}}>
                <div className={\`\p-2 rounded-md 
                                transition-all duration-500 delay-100 ease-in-out
                                \$\{hamburger ? "text-white hover:bg-neutral-800" : "text-black hover:bg-neutral-200"}
                                \`\}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" 
                                y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                    </div>            
                </div>
                <ul className='flex flex-col pl-10 transition-colors duration-50 ul gap-y-16'>
                    <li className='overflow-hidden'>
                        <Link href={MenuItems[0].link} className='relative flex flex-col overflow-hidden h-[60px]'>
                            <div className='absolute bg-white opacity-75 min-w-10 top-1/2 -translate-y-1/2 -left-10 min-h-0.5 line'></div>
                            <p className='pl-8 primary'>{MenuItems[0].name}</p>
                            <p className='pl-8 secondry'>{MenuItems[0].name}</p>
                        </Link>
                    </li>
                    <li className='overflow-hidden'>
                        <Link href={\`\${MenuItems[2].link}\`\} className='relative flex flex-col overflow-hidden h-[60px]'>
                            <div className='absolute bg-white opacity-75 min-w-10 top-1/2 -translate-y-1/2 -left-10 min-h-0.5 line'></div>
                            <p className='pl-8 primary'>{MenuItems[1].name}</p>
                            <p className='pl-8 secondry'>{MenuItems[1].name}</p>
                        </Link>
                    </li>
                    <li className='overflow-hidden'>
                        <Link href={\`\${MenuItems[2].link}\`\} className='relative flex flex-col overflow-hidden h-[60px]'>
                            <div className='absolute bg-white opacity-75 min-w-10 top-1/2 -translate-y-1/2 -left-10 min-h-0.5 line'></div>
                            <p className='pl-8 primary'>{MenuItems[2].name}</p>
                            <p className='pl-8 secondry'>{MenuItems[2].name}</p>
                        </Link>
                    </li>
                    <li className='overflow-hidden'>
                        <Link href={\`\${MenuItems[2].link}\`\} className='relative flex flex-col overflow-hidden h-[60px]'>
                            <div className='absolute bg-white opacity-75 min-w-10 top-1/2 -translate-y-1/2 -left-10 min-h-0.5 line'></div>
                            <p className='pl-8 primary'>{MenuItems[3].name}</p>
                            <p className='pl-8 secondry'>{MenuItems[3].name}</p>
                        </Link>
                    </li>
                    <li className='overflow-hidden'>
                        <Link href={\`\${MenuItems[2].link}\`\} className='relative flex flex-col overflow-hidden h-[60px]'>
                            <div className='absolute bg-white opacity-75 min-w-10 top-1/2 -translate-y-1/2 -left-10 min-h-0.5 line'></div>
                            <p className='pl-8 primary'>{MenuItems[4].name}</p>
                            <p className='pl-8 secondry'>{MenuItems[4].name}</p>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='absolute top-0 left-0 z-0 w-full h-full bg-black background'></div>
        </div>
    )
}

export default ModernSidebar 
`} 
                  jsxlocation={"components/modern-sidebar/modernsidebar.jsx"} 
                  csslocation={""}
                  warning={"This component may require intermediate JS/GSAP skills. Adjust the height/width as per your requirements."}
        />
    </div>
  )
}

export default TeamCarouselPage