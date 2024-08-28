import AnimatedGridPattern from './magicui/animated-grid-pattern'
import { Button } from "./ui/button"
import { cn } from '@/lib/utils'
import { HoverBorderGradientDemo } from "./GradientButton"
import Image from 'next/image'
import Link from 'next/link'


export default function Hero() {
  return (
    <section className="w-full h-screen flex items-center "> 
            <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.25}
        duration={3}
        repeatDelay={8}
        className={cn(
          "[mask-image:radial-gradient(ellipse_50%_50%_at_center,black_0%,rgba(0,0,0,0.5)_50%,rgba(0,0,0,0)_100%)]",
          "inset-x-0",
        )}
      />
      <div className="container px-4 md:px-6 animate-in fade-in duration-1000">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-4">
          <HoverBorderGradientDemo />
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl ">
              Beautifully Designed Components
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl lg:text-lg">
              Craft stunning user interfaces with our comprehensive UI library. Accessible, customizable, and
              open-source.
            </p>
          </div>
        <div className="flex z-50">
            <Button className="mx-3"><Link href='/components'>Browse Components</Link></Button>
            <Button className="mx-3" variant="outline"><Link href='/components/introduction'>Get Started</Link></Button>
        </div>
        <p className='mx-auto max-w-[700px] text-muted-foreground md:text-sm lg:text-sm'>Built with & for</p>
        <div className="flex items-center content-center space-x-7 opacity-75">
                <Image className='grayscale' src='react-2.svg' width={35} height={35}></Image>
                <Image className="grayscale" src='next.svg' width={100} height={50}></Image>
                <Image className="grayscale" src='framer-motion.svg' width={34} height={35}></Image>
                <Image className="grayscale" src='shadcn-ui-seeklogo.svg' width={35} height={35}></Image>
                <Image className="grayscale" src='logo-javascript.svg' width={33} height={33}></Image>
        </div>
        </div>
      </div>
    </section>
  )
}