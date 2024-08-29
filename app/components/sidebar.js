import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='h-screen'>
      <div className='pl-24 py-24 flex flex-col space-y-2 overflow-auto overflow-x-hidden'>
        <div className='-ml-2 pb-1 font-bold'>
          Getting Started
        </div>
        <Link href='/components/introduction' className='text-neutral-400 text-sm hover:text-[#365377] transition-transform duration-300 ease-in-out hover:translate-x-3'>
          Introduction
        </Link>
        <div className='-ml-2 pb-1 pt-2 font-bold'>
          Installation
        </div>
        <Link href='/components/install-nextjs' className='text-neutral-400 text-sm hover:text-[#365377] transition-transform duration-300 ease-in-out hover:translate-x-3'>
          Install Next.js
        </Link>
        <Link href='/components/install-tailwind' className='text-neutral-400 text-sm hover:text-[#365377] transition-transform duration-300 ease-in-out hover:translate-x-3'>
          Install Tailwind CSS
        </Link>
        <Link href='/components/install-shadcn' className='text-neutral-400 text-sm hover:text-[#365377] transition-transform duration-300 ease-in-out hover:translate-x-3'>
          Install ShadCN
        </Link>
        <Link href='/components' className='-ml-2 pb-1 pt-2 font-bold'>
          All Components
        </Link>
        <Link href='/components/animated-card' className='text-neutral-400 text-sm hover:text-[#365377] transition-transform duration-300 ease-in-out hover:translate-x-3'>
          Animated Card
        </Link>
        <Link href='/components/magnetic-icons' className='text-neutral-400 text-sm hover:text-[#365377] transition-transform duration-300 ease-in-out hover:translate-x-3'>
          Magnetic Icons
        </Link>
        <Link href='/components/macos-dock' className='text-neutral-400 text-sm hover:text-[#365377] transition-transform duration-300 ease-in-out hover:translate-x-3'>
          macOS Dock
        </Link>
        <Link href='/components/team-carousel' className='text-neutral-400 text-sm hover:text-[#365377] transition-transform duration-300 ease-in-out hover:translate-x-3'>
          Team Carousel
        </Link>
      </div>
    </div>
  )
}

export default Sidebar