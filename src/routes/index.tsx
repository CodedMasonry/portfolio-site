import { A } from "@solidjs/router";
import { For } from "solid-js";
import { Button } from "~/components/ui/button";

const github_url = "https://github.com/CodedMasonry"

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <Contact />
    </main>
  );
}

function Hero() {
  return (
    <div class="bg-gradient-to-b from-accent to-background">
      <div class="mx-40 translate-y-36">
        <div
          class="flex"
        >
          <img
            src="/drone_highway.jpg"
            alt="Headshot"
            class="flex size-96 aspect-square rounded-2xl shadow-xl fade-in translate-in-2"
          />
          <div class="typewriter flex flex-col ml-8 mt-8">
            <h1 class="text-4xl font-bold max-w-96">Hello, I'm Brock.</h1>
            <h3 class="text-xl text-primary">Software Developer, Cybersecurity Enthusiast</h3>
            <p class="mt-4 max-w-3xl">
              I'm a high school student from Ohio with years of programming experience,
              focusing on network programming, cryptography, and malware development.
              Having a diverse skill set in these areas gives me a well-rounded understanding of the cybersecurity landscape.
              I'm also passionate about bridging the gap between the technical and business aspects of technology,
              emphasizing clear communication and collaboration to push results.
            </p>
            <div class="flex flex-row mt-8 space-x-4">
              <Button as={A} href="/resume" size="lg">
                <img src="/icons/markdown.svg" alt="" class="size-6 mr-2" />
                Resume.md
              </Button>
              <Button as={A} href="/#about" variant="outline" size="lg">
                <img src="/icons/corner-left-down.svg" alt="" class="size-6 mr-2 invert" />
                About Me</Button>

              <Button as={A} href={github_url} variant="outline" size="lg">
                <img src="/icons/github.svg" alt="" class="size-6 mr-2 invert" />
                Github
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function AboutSection() {
  return (
    <div class="pt-48 px-32 fade-in">
      <h2 id="about" class="font-bold text-3xl">Who Am I?</h2>
      <div class="my-4 grid md:grid-cols-5 gap-4">
        <A href={github_url} class="p-2 rounded-xl border overflow-hidden relative h-72 bg-accent/20 hover:bg-accent/40 transition-colors col-span-2">
          <h3 class="font-semibold text-2xl text-primary">Software Developer</h3>
          <p class="text-sm mt-2">
            I've been programming for years in several language. I started to program by creating games on Roblox and over years have expanded my knowledge to span numerous categories.
          </p>
          <div class="flex flex-col space-y-2 mt-2">
            <p class="flex items-center text-lg">
              <img src="/icons/rust.svg" alt="" class="size-10 mr-2" />
              Rust
            </p>
            <p class="flex items-center text-lg">
              <img src="/icons/go.svg" alt="" class="size-10 mr-2" />
              Golang
            </p>
            <p class="flex items-center text-lg">
              <img src="/icons/typescript.svg" alt="" class="size-10 mr-2" />
              Typescript
            </p>
          </div>
          <p class="flex items-center text-lg absolute bottom-4 right-4">Github
            <img src="/icons/arrow-right.svg" alt="" class="size-6 ml-2 invert" />
          </p>
        </A>
        <A href="/photos" class="p-2 rounded-xl border overflow-hidden relative h-72 group col-span-2">
          <img src="/drone.jpg" alt="" class="bg-center bg-cover opacity-30 absolute left-0 top-0 w-full h-auto transition duration-300 group-hover:opacity-40" />
          <div class="relative h-full">
            <h3 class="font-semibold text-2xl text-primary">Certified Drone Pilot</h3>
            <p class="text-sm mt-2">
              I am a Part 107 Certified Drone Pilot in the United States. A hobby of mine is photography and drones,
              so I decided to become certified.
            </p>
          </div>
          <p class="flex items-center text-lg absolute bottom-4 right-4">Gallery
            <img src="/icons/arrow-right.svg" alt="" class="size-6 ml-2 invert" />
          </p>
        </A>
        <A href="/risk-at-rest" class="p-2 rounded-xl border overflow-hidden relative h-72 bg-accent/20 hover:bg-accent/40 transition-colors">
          <h3 class="font-semibold text-2xl text-primary">Risk At Rest: To What Extent Is The Government Protecting Our Data?</h3>
          <p class="text-sm mt-2">
            A Paper I have written in regards to government policies & initiatives to improve the cybersecurity landscape.
          </p>
          <p class="flex items-center text-lg absolute bottom-4 right-4">Read
            <img src="/icons/arrow-right.svg" alt="" class="size-6 ml-2 invert" />
          </p>
        </A>
        <A href="https://github.com/CodedMasonry/portfolio-site" class="p-2 rounded-xl border overflow-hidden relative h-72 bg-accent/20 hover:bg-accent/40 transition-colors">
          <h3 class="font-semibold text-2xl text-primary">Technology Enthusiast</h3>
          <p class="text-sm mt-2 max-w-xl">
            For simplicity sake, here is some of the technology used to make this website.
          </p>
          <div class="grid grid-cols-2 mt-2 gap-2">
            <p class="flex items-center">
              <svg class="size-6 mr-2" data-testid="geist-icon" height="24" stroke-linejoin="round" viewBox="0 0 16 16" width="24" style="color: currentcolor;"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 1L16 15H0L8 1Z" fill="currentColor"></path></svg>
              Vercel
            </p>
            <p class="flex items-center">
              <img src="/icons/solidjs.svg" alt="" class="size-6 mr-2" />
              SolidJS
            </p>
            <p class="flex items-center">
              <img src="/icons/bun.svg" alt="" class="size-6 mr-2" />
              Bun
            </p>
            <p class="flex items-center">
              <img src="/icons/tailwind.svg" alt="" class="size-6 mr-2" />
              Tailwindcss
            </p>
            <p class="flex items-center">
              <img src="/icons/git.svg" alt="" class="size-6 mr-2" />
              Git
            </p>
            <p class="flex items-center">
              <img src="/icons/typescript.svg" alt="" class="size-6 mr-2" />
              Typescript
            </p>
            <p class="flex items-center text-lg absolute bottom-4 right-4">Repository
              <img src="/icons/arrow-right.svg" alt="" class="size-6 ml-2 invert" />
            </p>
          </div>
        </A>
        <A href="/resume" class="p-2 rounded-xl border overflow-hidden relative h-72 bg-accent/20 hover:bg-accent/40 transition-colors col-span-2">
          <h3 class="font-semibold text-2xl text-primary">Soft Skills</h3>
          <div class="flex flex-col space-y-2 mt-2">
            <p><span class="font-semibold">Leadership</span> - An important part of any job is knowing when to take charge and helping everyone succeed.</p>
            <p><span class="font-semibold">Patient</span>    - In any situation it is critical to stay level headed and not rush others; you want their best work.</p>
            <p><span class="font-semibold">Receptive</span>  - Everyone makes mistakes, and being able to take critism and provide insightful critism is important.</p>
            <p><span class="font-semibold">Flexible</span>   - Being able to adapt to changing environments is a necessity in an ever changing landscape.</p>
          </div>
        </A>
        <A href="/resume" class="p-2 rounded-xl border overflow-hidden relative h-72 group col-span-2">
          <img src="/homes.jpg" alt="" class="bg-center bg-cover opacity-30 absolute left-0 top-0 w-full h-auto transition duration-300 group-hover:opacity-40" />
          <div class="relative h-full">
            <h3 class="font-semibold text-2xl text-primary">Real Estate Associate</h3>
            <p class="text-sm mt-2">
              Having years of experience doing manual labor, working with power tools, and thinking on my feet
              has helped gain valuable skills ranging from physical tasks to problem solving.
            </p>
          </div>
          <p class="flex items-center text-lg absolute bottom-4 right-4">Resume
            <img src="/icons/arrow-right.svg" alt="" class="size-6 ml-2 invert" />
          </p>
        </A>
      </div>
    </div>
  )
}

function Contact() {
  return (
    <div class="pb-28 pt-10 px-32 fade-in">
      <h2 id="about" class="font-bold text-3xl">Want To Know More?</h2>
      <p class="max-w-xl mb-4 mt-2">Read my resume, it is a file dedicated to explaining who I am, what I do, and what I'm passionate about.</p>
      <Button as={A} href="/resume" size="lg">
        <img src="/icons/markdown.svg" alt="" class="size-6 mr-2" />
        Resume.md
      </Button>
    </div>
  )
}