import AnimatedGridPattern from "./magicui/animated-grid-pattern";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { HoverBorderGradientDemo } from "./GradientButton";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex items-center w-full h-screen ">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.25}
        duration={3}
        repeatDelay={8}
        className={cn(
          "[mask-image:radial-gradient(ellipse_50%_50%_at_center,black_0%,rgba(0,0,0,0.5)_50%,rgba(0,0,0,0)_100%)]",
          "inset-x-0"
        )}
      />
      <div className="container px-4 duration-1000 md:px-6 animate-in fade-in">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-4">
            <HoverBorderGradientDemo />
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl ">
              Beautifully Designed Components
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl lg:text-lg">
              Craft stunning user interfaces with our comprehensive UI library.
              Accessible, customizable, and open-source.
            </p>
          </div>
          <div className="z-50 flex">
            <Link href="/components/animated-card/">
              <Button className="mx-3">Browse Components</Button>
            </Link>
            <Link href="/components/introduction">
              <Button className="mx-3" variant="outline">
                Get Started
              </Button>
            </Link>
          </div>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-sm lg:text-sm">
            Built with & for
          </p>
          <div className="flex items-center content-center opacity-75 space-x-7">
            <Image
              className="grayscale"
              src="react-2.svg"
              width={35}
              height={35}
            ></Image>
            <Image
              className="grayscale"
              src="next.svg"
              width={100}
              height={50}
            ></Image>
            <Image
              className="grayscale"
              src="framer-motion.svg"
              width={34}
              height={35}
            ></Image>
            <Image
              className="grayscale"
              src="gsap-greensock.svg"
              width={33}
              height={33}
            ></Image>
            <Image
              className="grayscale"
              src="logo-javascript.svg"
              width={33}
              height={33}
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
}
