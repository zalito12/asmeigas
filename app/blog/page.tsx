import Link from "next/link"

export default function BlogPage() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Últimas publicacións</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Mergúllate nas Nosas Aventuras Acuáticas</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explora as últimas publicacións do noso blog e descubre o apaixonante mundo das Meigas.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <Link
            href="#"
            className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            prefetch={false}
          >
            <div className="space-y-2 not-prose">
              <img
                src="/placeholder.svg"
                alt="Blog Post Image"
                width={550}
                height={310}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Diving Into the Aqua Swim Club Experience</h3>
                <p className="text-muted-foreground">Posted on September 10, 2024</p>
              </div>
            </div>
          </Link>
          <Link
            href="#"
            className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            prefetch={false}
          >
            <div className="space-y-2 not-prose">
              <img
                src="/placeholder.svg"
                alt="Blog Post Image"
                width={550}
                height={310}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Exploring the Aqua Swim Club's Amenities</h3>
                <p className="text-muted-foreground">Posted on August 15, 2024</p>
              </div>
            </div>
          </Link>
          <Link
            href="#"
            className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            prefetch={false}
          >
            <div className="space-y-2 not-prose">
              <img
                src="/placeholder.svg"
                alt="Blog Post Image"
                width={550}
                height={310}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Aqua Swim Club's Competitive Swim Meets</h3>
                <p className="text-muted-foreground">Posted on July 1, 2024</p>
              </div>
            </div>
          </Link>
          <Link
            href="#"
            className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            prefetch={false}
          >
            <div className="space-y-2 not-prose">
              <img
                src="/placeholder.svg"
                alt="Blog Post Image"
                width={550}
                height={310}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Aqua Swim Club's Community Events</h3>
                <p className="text-muted-foreground">Posted on June 20, 2024</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
