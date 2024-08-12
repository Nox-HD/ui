import Link from "next/link"
import { Button } from "./ui/button"
import { HoverBorderGradientDemo } from "./GradientButton"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48"> 
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-4">
          <HoverBorderGradientDemo />
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Beautifully Designed Components
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl lg:text-lg">
              Craft stunning user interfaces with our comprehensive UI library. Accessible, customizable, and
              open-source.
            </p>
          </div>
        <div className="flex">
            <Button className="mx-3">Browse Components</Button>
            <Button className="mx-3" variant="outline">Get Started</Button>
        </div>
        </div>
      </div>
    </section>
  )
}