'use client'
import React from 'react'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

const Playground = () => {
    useEffect(() => {
        const query = gsap.utils.toArray('li a')
        query.forEach((link)=> {
            const tl = gsap.timeline({defaults: {
                duration: .1,
            }})
            tl  
                .to(link, {
                    y: -20
                })
            tl.pause()
            
        })
    })

    return (
        <div className='container text-4xl gap-y-5'>
            <ul className='flex flex-col gap-y-4'>
                <li>
                    <a className='flex flex-col overflow-hidden h-9'>
                        <p>First Line</p>
                        <p>First Line</p>
                    </a>
                </li>
                <li>
                    <a className='flex flex-col overflow-hidden h-9'>
                        <p>Second Line</p>
                        <p>Second Line</p>
                    </a>
                </li>
                <li>
                    <a className='flex flex-col overflow-hidden h-9'>
                        <p>Third Line</p>
                        <p>Third Line</p>
                    </a>
                </li>
                <li>
                    <a className='flex flex-col overflow-hidden h-9'>
                        <p>Fourth Line</p>
                        <p>Fourth Line</p>
                    </a>
                </li>
           </ul>
        </div>
    )
}

export default Playground
