import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Effortless UI with Stunning Animations
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover the power of our UI library, where every component comes to life with captivating animations that
            elevate your user experience.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="group rounded-xl border border-input bg-background p-6 shadow-sm transition-all hover:border-primary hover:shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary text-2xl font-bold text-primary-foreground flex items-center justify-center">
                  1
                </div>
                <h3 className="text-lg font-semibold">Button</h3>
              </div>
              <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center transition-all group-hover:rotate-180 group-hover:scale-110">
                <ArrowRightIcon className="h-5 w-5" />
              </div>
            </div>
            <p className="mt-4 text-muted-foreground">
              Bring your UI to life with our sleek and responsive buttons, complete with smooth animations to captivate
              your users.
            </p>
            <div className="mt-6 flex justify-center">
              <Button className="animate-bounce">Explore Buttons</Button>
            </div>
          </div>
          <div className="group rounded-xl border border-input bg-background p-6 shadow-sm transition-all hover:border-primary hover:shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary text-2xl font-bold text-primary-foreground flex items-center justify-center">
                  2
                </div>
                <h3 className="text-lg font-semibold">Cards</h3>
              </div>
              <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center transition-all group-hover:rotate-180 group-hover:scale-110">
                <ArrowRightIcon className="h-5 w-5" />
              </div>
            </div>
            <p className="mt-4 text-muted-foreground">
              Elevate your content with our visually stunning cards, each with captivating animations that draw the
              user's attention.
            </p>
            <div className="mt-6 flex justify-center">
              <Card className="animate-pulse">
                <CardHeader>
                  <CardTitle>Animated Card</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Discover the power of our UI library's cards.</p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="group rounded-xl border border-input bg-background p-6 shadow-sm transition-all hover:border-primary hover:shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary text-2xl font-bold text-primary-foreground flex items-center justify-center">
                  3
                </div>
                <h3 className="text-lg font-semibold">Inputs</h3>
              </div>
              <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center transition-all group-hover:rotate-180 group-hover:scale-110">
                <ArrowRightIcon className="h-5 w-5" />
              </div>
            </div>
            <p className="mt-4 text-muted-foreground">
              Elevate your forms with our visually stunning inputs, each with captivating animations that engage your
              users.
            </p>
            <div className="mt-6 flex justify-center">
              <Input placeholder="Animated Input" className="animate-wiggle" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}