import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='h-screen'>
      <div className='flex flex-col py-24 pl-24 space-y-2 overflow-auto overflow-x-hidden'>
        <div className='pb-1 -ml-2 font-bold'>
          Getting Started
        </div>
        <Link href='/components/introduction' className='text-neutral-400 text-sm hover:text-[#365377] transition-transform duration-300 ease-in-out hover:translate-x-3'>
          Introduction
        </Link>
        <div className='pt-2 pb-1 -ml-2 font-bold'>
          Installation
        </div>
        <Link href='/components/install-nextjs' className='text-neutral-400 text-sm hover:text-[#365377] transition-transform duration-300 ease-in-out hover:translate-x-3'>
          Install Next.js
        </Link>
        <Link href='/components/install-tailwind' className='text-neutral-400 text-sm hover:text-[#365377] transition-transform duration-300 ease-in-out hover:translate-x-3'>
          Install Tailwind CSS
        </Link>
        <Link href='/components' className='pt-2 pb-1 -ml-2 font-bold'>
          All Components
        </Link>
        <Link href='/components/animated-grid-bg' className='text-neutral-400 text-sm hover:text-[#365377] transition-transform duration-300 ease-in-out hover:translate-x-3'>
          Animated Grid Background
        </Link>
        <Link href='/components/animated-card' className='text-neutral-400 text-sm hover:text-[#365377] transition-transform duration-300 ease-in-out hover:translate-x-3'>
          Animated Card
        </Link>
        <Link href='/components/magnetic-icons' className='text-neutral-400 text-sm hover:text-[#365377] transition-transform duration-300 ease-in-out hover:translate-x-3'>
          Magnetic Icons
        </Link>
        <Link href='/components/awards-carousel' className='text-neutral-400 text-sm hover:text-[#365377] transition-transform duration-300 ease-in-out hover:translate-x-3'>
          Awards Carousel
        </Link>
        <Link href='/components/simple-bento-grid' className='text-neutral-400 text-sm hover:text-[#365377] transition-transform duration-300 ease-in-out hover:translate-x-3'>
          Simple Bento Grid
        </Link>
        <Link href='/components/infinite-tunnel' className='text-neutral-400 text-sm hover:text-[#365377] transition-transform duration-300 ease-in-out hover:translate-x-3'>
          Infinite Tunnel
        </Link>
        <Link href='/components/macos-dock' className='text-neutral-400 text-sm hover:text-[#365377] transition-transform duration-300 ease-in-out hover:translate-x-3'>
          macOS Dock
        </Link>
        <Link href='/components/team-carousel' className='text-neutral-400 text-sm hover:text-[#365377] transition-transform duration-300 ease-in-out hover:translate-x-3'>
          Team Carousel
        </Link>
        <Link href='/components/modern-sidebar' className='text-neutral-400 text-sm hover:text-[#365377] transition-transform duration-300 ease-in-out hover:translate-x-3'>
          Modern Sidebar
        </Link>
        <Link href='/components/image-carousel' className='text-neutral-400 text-sm hover:text-[#365377] transition-transform duration-300 ease-in-out hover:translate-x-3'>
          Image Carousel
        </Link>
        <div className='pt-2 pb-0.5 -ml-2 font-bold text-sm'>
          Text Effects
        </div>
        <Link href='/components/staggered-text' className='text-neutral-400 text-sm hover:text-[#365377] transition-transform duration-300 ease-in-out hover:translate-x-3'>
          Staggered Text
        </Link>
      </div>
    </div>
  )
}

export default Sidebar