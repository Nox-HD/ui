'use client'
import React from 'react'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import classNames from 'classnames'

const TeamCarouselElement = () => {
    const [current, setCurrent] = useState(4)
    const ref = useRef(null)

    useEffect(() => {
        ref.current.style.setProperty(
            "--transition",
            "600ms cubic-bezier(0.22, 0.61, 0.36, 1)"
        )
    }, [current])

    setTimeout(() => {
        ref.current?.style.removeProperty(
            "--transition"
        )
    }, 900)

    const members = [{
        name: "Sam Altman",
        image: "/teamcarousel/guy1.jpg",
        tag: "CEO of OpenAI"
    }, {
        name: "Madison Beer",
        image: "/teamcarousel/girl1.jpg",
        tag: "Female Singer"
    }, {
        name: "Gigi Hadid",
        image: "/teamcarousel/girl2.jpg",
        tag: "CEO of ACME"
    }, {
        name: "Travis Scott",
        image: "/teamcarousel/guy2.jpg",
        tag: "CFO of Google"
    }, {
        name: "Dua Lipa",
        image: "/teamcarousel/girl3.jpg",
        tag: "Female Actor"
    }, {
        name: "John Doe",
        image: "/teamcarousel/guy3.jpg",
        tag: "Content Creator"
    }, {
        name: "Witt Lowry",
        image: "/teamcarousel/guy4.jpg",
        tag: "Proffesional Skater"
    }, {
        name: "Lana Del Rey",
        image: "/teamcarousel/girl4.jpg",
        tag: "Award-Winning Actor"
    }]

  return (
    <div className='flex h-full w-full items-center justify-center px-10'>
        <div className='min-w-full'>
            <ul ref={ref} className='group flex h-80 overflow-hidden'>
                {members.map((person, index) => (
                    <li onClick={() => setCurrent(index)} 
                        className={classNames("w-[15%] p-2 relative [transition:width_var(--transition,200ms_ease-in-out)]",
                                              "hover:w-[18%] [&:not([aria-current='true'])]:group-hover:[&:not(:hover)]:w-[12%] ",
                                              "[&[aria-current='true']]:w-[50%] [&[aria-current='true']]:group-hover:w-[40%]",
                                              "before:absolute before:bottom-0 before:top-0 before:left-[-8px] before:right-[-8px]",
                                              "before:rounded-xl"  
                                            )}

                        aria-current={current === index} 
                        key={person.name}
                    >
                        <div className='overflow-hidden h-full w-full relative rounded-xl'>
                            <Image className={classNames("absolute max-w-none w-[288px] h-[320px] left-1/2 top-1/2 -translate-x-1/2",
                                              "-translate-y-1/2 object-cover rounded-xl [transition:filter_600ms_cubic-bezier(0.22,0.61,0.36,1)]",
                                              current === index ? "" : "grayscale"
                                            )} 
                                   width={288}
                                   height={320}
                                   src={person.image}
                            />
                            {current === index ? (<Image className='absolute max-w-none w-[288px] h-[320px] left-1/2 top-1/2 -translate-x-1/2 
                                              -translate-y-1/2 object-cover rounded-xl mix-blend-multiply opacity-75 pointer-events-none
                                              [transition:opacity_600ms_cubic-bezier(0.22,0.61,0.36,1)]'
                                   width={288}
                                   height={320}
                                   src="/teamcarousel/gradient.png"
                            />) : null
                            }
                        </div>
                        <div className={classNames(
                                            'absolute bottom-12 left-7 text-3xl whitespace-nowrap [transition:opacity_600ms_cubic-bezier(0.22,0.61,0.36,1)]',
                                            current === index ? 'opacity-100' : 'opacity-0'
                                        )}
                        >
                            {person.name.split(" ").map((word, index) => {
                                return (<span key={person.name} className={classNames(index === 1 ? 'font-bold' : '')}>{word}{' '}</span>)
                            })}
                        </div>
                        <div className={classNames(
                                            'absolute bottom-8 left-8 text-xs whitespace-nowrap [transition:opacity_600ms_cubic-bezier(0.22,0.61,0.36,1)]',
                                            current === index ? 'opacity-75' : 'opacity-0',
                                        )}
                        >
                            {person.tag}
                        </div>
                    </li>  
                ))}
            </ul>
        </div>
    </div>
  )
}

export default TeamCarouselElement