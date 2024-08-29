'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

const TeamCarouselElement = () => {
    const [current, setCurrent] = useState(5)

    const members = [{
        name: "Sam Altman",
        image: "/teamcarousel/guy1.jpg",
    }, {
        name: "Madison Beer",
        image: "/teamcarousel/girl1.jpg",
    }, {
        name: "Gigi Hadid",
        image: "/teamcarousel/girl2.jpg",
    }, {
        name: "Travis Scott",
        image: "/teamcarousel/guy2.jpg",
    }, {
        name: "Dua Lipa",
        image: "/teamcarousel/girl3.jpg",
    }, {
        name: "John Doe",
        image: "/teamcarousel/guy3.jpg",
    }, {
        name: "Witt Lowry",
        image: "/teamcarousel/guy4.jpg",
    }, {
        name: "Witt Lowry",
        image: "/teamcarousel/guy4.jpg",
    }]

  return (
    <div className='flex h-full w-full items-center justify-center px-10'>
        <div className='min-w-full'>
            <ul className='group flex h-80 overflow-hidden'>
                {members.map((person, index) => (
                    <li className="w-[15%] p-2 relative transition-[width] 
                                   hover:w-[18%] 
                                   [&:not([aria-current='true'])]:group-hover:[&:not(:hover)]:w-[12%] 
                                   [&[aria-current='true']]:w-[50%]
                                   [&[aria-current='true']]:group-hover:w-[40%]
                                   before:absolute before:bottom-0 
                                   before:top-0 
                                   before:left-[-8px] 
                                   before:right-[-8px]
                                   before:rounded-xl" 

                        aria-current={current === index} 
                        key={person.name}
                    >
                        <div className='overflow-hidden h-full w-full relative rounded-xl'>
                            <Image className='absolute max-w-none w-[288px] h-[320px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grayscale object-cover rounded-xl' 
                                   width={288}
                                   height={320}
                                   src={person.image}
                            />
                        </div>
                    {person.name}
                    </li>  
                ))}
            </ul>
        </div>
    </div>
  )
}

export default TeamCarouselElement