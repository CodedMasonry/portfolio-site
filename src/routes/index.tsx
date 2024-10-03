import { A } from "@solidjs/router";
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
    <div class="bg-grid">
      <div class="mx-4 md:mx-8 lg:mx-40 translate-y-12 pb-20 md:translate-y-36 md:pb-40">
        <div class="flex flex-col md:flex-row items-center md:items-start">
          <img
            src="/drone_highway.jpg"
            alt="Headshot"
            class="flex size-72 lg:size-96 aspect-square rounded-2xl shadow-xl fade-in translate-in-2"
          />
          <div class="typewriter flex flex-col md:ml-8 mt-8 items-center md:items-start">
            <h1 class="text-2xl md:text-4xl font-bold max-w-64 md:max-w-96">Hello, I'm Brock.</h1>
            <h3 class="text-xl text-primary text-center md:text-start text-wrap">Software Developer, Cybersecurity Enthusiast</h3>
            <p class="mt-8 max-w-xl md:max-w-2xl lg:max-w-3xl text-wrap">
              I'm a high school student from Columbus, Ohio with years of programming experience,
              focusing on network programming, and malware development.
              Having a diverse skill set in these areas gives me a well-rounded understanding of the cybersecurity landscape.
              I'm also passionate about bridging the gap between the technical and business aspects of technology,
              emphasizing clear communication and collaboration to push results.
            </p>
            <div class="flex flex-col md:flex-row mt-8 md:space-x-4">
              <Button as={A} href="/resume" size="lg">
                <img src="/icons/markdown.svg" alt="" class="size-6 mr-2" />
                Resume.md
              </Button>
              <Button as={A} href="/#about" variant="ghost" size="lg">
                <img src="/icons/corner-left-down.svg" alt="" class="size-6 mr-2 invert" />
                About Me</Button>

              <Button as={A} href={github_url} variant="ghost" size="lg">
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
    <div class="pt-16 px-4 md:px-32 fade-in">
      <h2 id="about" class="font-bold text-4xl ml-4 text-center md:text-start">Who Am I?</h2>
      <div class="my-4 grid md:grid-cols-2 xl:grid-cols-5 gap-4">
        <A href={github_url} class="p-2 rounded-xl border overflow-hidden relative h-72 bg-accent/20 hover:bg-accent/40 transition-colors col-span-2">
          <h3 class="font-semibold text-2xl text-primary">Software Developer</h3>
          <p class="text-sm mt-2">
            I've been programming for years in several language. I started to program by creating games on Roblox and over years have expanded my knowledge to span numerous categories.
          </p>
          <div class="flex flex-col space-y-2 mt-2">
            <p class="flex items-center text-lg">
              <img src="/icons/rust.svg" alt="" class="size-10 mr-2 invert" />
              Rust
            </p>
            <p class="flex items-center text-lg">
              <img src="/icons/go.svg" alt="" class="size-10 mr-2" />
              Golang
            </p>
            <p class="flex items-center text-lg">
              <svg class="size-10 mr-2" fill="none" height="128" viewBox="0 0 128 128" width="128" xmlns="http://www.w3.org/2000/svg"><rect fill="#3178c6" height="128" rx="6" width="128" /><path clip-rule="evenodd" d="m74.2622 99.468v14.026c2.2724 1.168 4.9598 2.045 8.0625 2.629 3.1027.585 6.3728.877 9.8105.877 3.3503 0 6.533-.321 9.5478-.964 3.016-.643 5.659-1.702 7.932-3.178 2.272-1.476 4.071-3.404 5.397-5.786 1.325-2.381 1.988-5.325 1.988-8.8313 0-2.5421-.379-4.7701-1.136-6.6841-.758-1.9139-1.85-3.6159-3.278-5.1062-1.427-1.4902-3.139-2.827-5.134-4.0104-1.996-1.1834-4.246-2.3011-6.752-3.353-1.8352-.7597-3.4812-1.4975-4.9378-2.2134-1.4567-.7159-2.6948-1.4464-3.7144-2.1915-1.0197-.7452-1.8063-1.5341-2.3598-2.3669-.5535-.8327-.8303-1.7751-.8303-2.827 0-.9643.2476-1.8336.7429-2.6079s1.1945-1.4391 2.0976-1.9943c.9031-.5551 2.0101-.9861 3.3211-1.2929 1.311-.3069 2.7676-.4603 4.3699-.4603 1.1658 0 2.3958.0877 3.6928.263 1.296.1753 2.6.4456 3.911.8109 1.311.3652 2.585.8254 3.824 1.3806 1.238.5552 2.381 1.198 3.43 1.9285v-13.1051c-2.127-.8182-4.45-1.4245-6.97-1.819s-5.411-.5917-8.6744-.5917c-3.3211 0-6.4674.3579-9.439 1.0738-2.9715.7159-5.5862 1.8336-7.844 3.353-2.2578 1.5195-4.0422 3.4553-5.3531 5.8075-1.311 2.3522-1.9665 5.1646-1.9665 8.4373 0 4.1785 1.2017 7.7433 3.6052 10.6945 2.4035 2.9513 6.0523 5.4496 10.9466 7.495 1.9228.7889 3.7145 1.5633 5.375 2.323 1.6606.7597 3.0954 1.5486 4.3044 2.3668s2.1628 1.7094 2.8618 2.6736c.7.9643 1.049 2.06 1.049 3.2873 0 .9062-.218 1.7462-.655 2.5202s-1.1 1.446-1.9885 2.016c-.8886.57-1.9956 1.016-3.3212 1.337-1.3255.321-2.8768.482-4.6539.482-3.0299 0-6.0305-.533-9.0021-1.6-2.9715-1.066-5.7245-2.666-8.2591-4.799zm-23.5596-34.9136h18.2974v-11.5544h-51v11.5544h18.2079v51.4456h14.4947z" fill="#fff" fill-rule="evenodd" /></svg>
              Typescript
            </p>
          </div>
          <p class="flex items-center text-lg absolute bottom-4 right-4">Github
            <img src="/icons/arrow-right.svg" alt="" class="size-6 ml-2 invert" />
          </p>
        </A>
        <A href="/photos" class="p-2 rounded-xl border overflow-hidden relative h-72 group col-span-2">
          <img src="/drone.jpg" alt="" class="bg-center bg-cover opacity-30 absolute left-0 top-0 w-full h-auto transition duration-300 group-hover:opacity-40 aspect-square md:aspect-auto" />
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
        <A href="/risk-at-rest" class="p-2 rounded-xl border overflow-hidden relative h-72 bg-accent/20 hover:bg-accent/40 transition-colors col-span-2 md:col-span-1">
          <h3 class="font-semibold text-2xl text-primary">Risk At Rest: To What Extent Is The Government Protecting Our Data?</h3>
          <p class="tex text-sm mt-2">
            A Paper I have written in regards to government policies to improve the cybersecurity landscape.
          </p>
          <p class="flex items-center text-lg absolute bottom-4 right-4">Read
            <img src="/icons/arrow-right.svg" alt="" class="size-6 ml-2 invert" />
          </p>
        </A>
        <A href="https://github.com/CodedMasonry/portfolio-site" class="p-2 rounded-xl border overflow-hidden relative h-72 bg-accent/20 hover:bg-accent/40 transition-colors col-span-2 md:col-span-1">
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
              <svg class="size-6 mr-2" viewBox="0 0 166 155.3"><defs><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="27.5" y1="3" x2="152" y2="63.5"><stop offset=".1" stop-color="#76b3e1" /><stop offset=".3" stop-color="#dcf2fd" /><stop offset="1" stop-color="#76b3e1" /></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="95.8" y1="32.6" x2="74" y2="105.2"><stop offset="0" stop-color="#76b3e1" /><stop offset=".5" stop-color="#4377bb" /><stop offset="1" stop-color="#1f3b77" /></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="18.4" y1="64.2" x2="144.3" y2="149.8"><stop offset="0" stop-color="#315aa9" /><stop offset=".5" stop-color="#518ac8" /><stop offset="1" stop-color="#315aa9" /></linearGradient><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="75.2" y1="74.5" x2="24.4" y2="260.8"><stop offset="0" stop-color="#4377bb" /><stop offset=".5" stop-color="#1a336b" /><stop offset="1" stop-color="#1a336b" /></linearGradient></defs><path d="M163 35S110-4 69 5l-3 1c-6 2-11 5-14 9l-2 3-15 26 26 5c11 7 25 10 38 7l46 9 18-30z" fill="#76b3e1" /><path d="M163 35S110-4 69 5l-3 1c-6 2-11 5-14 9l-2 3-15 26 26 5c11 7 25 10 38 7l46 9 18-30z" opacity=".3" fill="url(#a)" /><path d="M52 35l-4 1c-17 5-22 21-13 35 10 13 31 20 48 15l62-21S92 26 52 35z" fill="#518ac8" /><path d="M52 35l-4 1c-17 5-22 21-13 35 10 13 31 20 48 15l62-21S92 26 52 35z" opacity=".3" fill="url(#b)" /><path d="M134 80a45 45 0 00-48-15L24 85 4 120l112 19 20-36c4-7 3-15-2-23z" fill="url(#c)" /><path d="M114 115a45 45 0 00-48-15L4 120s53 40 94 30l3-1c17-5 23-21 13-34z" fill="url(#d)" /></svg>
              SolidJS
            </p>
            <p class="flex items-center">
              <svg class="size-6 mr-2" viewBox="0 0 80 70"><title>Bun Logo</title><path id="Shadow" d="M71.09,20.74c-.16-.17-.33-.34-.5-.5s-.33-.34-.5-.5-.33-.34-.5-.5-.33-.34-.5-.5-.33-.34-.5-.5-.33-.34-.5-.5-.33-.34-.5-.5A26.46,26.46,0,0,1,75.5,35.7c0,16.57-16.82,30.05-37.5,30.05-11.58,0-21.94-4.23-28.83-10.86l.5.5.5.5.5.5.5.5.5.5.5.5.5.5C19.55,65.3,30.14,69.75,42,69.75c20.68,0,37.5-13.48,37.5-30C79.5,32.69,76.46,26,71.09,20.74Z" /><g id="Body"><path id="Background" d="M73,35.7c0,15.21-15.67,27.54-35,27.54S3,50.91,3,35.7C3,26.27,9,17.94,18.22,13S33.18,3,38,3s8.94,4.13,19.78,10C67,17.94,73,26.27,73,35.7Z" style="fill:#fbf0df" /><path id="Bottom_Shadow" data-name="Bottom Shadow" d="M73,35.7a21.67,21.67,0,0,0-.8-5.78c-2.73,33.3-43.35,34.9-59.32,24.94A40,40,0,0,0,38,63.24C57.3,63.24,73,50.89,73,35.7Z" style="fill:#f6dece" /><path id="Light_Shine" data-name="Light Shine" d="M24.53,11.17C29,8.49,34.94,3.46,40.78,3.45A9.29,9.29,0,0,0,38,3c-2.42,0-5,1.25-8.25,3.13-1.13.66-2.3,1.39-3.54,2.15-2.33,1.44-5,3.07-8,4.7C8.69,18.13,3,26.62,3,35.7c0,.4,0,.8,0,1.19C9.06,15.48,20.07,13.85,24.53,11.17Z" style="fill:#fffefc" /><path id="Top" d="M35.12,5.53A16.41,16.41,0,0,1,29.49,18c-.28.25-.06.73.3.59,3.37-1.31,7.92-5.23,6-13.14C35.71,5,35.12,5.12,35.12,5.53Zm2.27,0A16.24,16.24,0,0,1,39,19c-.12.35.31.65.55.36C41.74,16.56,43.65,11,37.93,5,37.64,4.74,37.19,5.14,37.39,5.49Zm2.76-.17A16.42,16.42,0,0,1,47,17.12a.33.33,0,0,0,.65.11c.92-3.49.4-9.44-7.17-12.53C40.08,4.54,39.82,5.08,40.15,5.32ZM21.69,15.76a16.94,16.94,0,0,0,10.47-9c.18-.36.75-.22.66.18-1.73,8-7.52,9.67-11.12,9.45C21.32,16.4,21.33,15.87,21.69,15.76Z" style="fill:#ccbea7;fill-rule:evenodd" /><path id="Outline" d="M38,65.75C17.32,65.75.5,52.27.5,35.7c0-10,6.18-19.33,16.53-24.92,3-1.6,5.57-3.21,7.86-4.62,1.26-.78,2.45-1.51,3.6-2.19C32,1.89,35,.5,38,.5s5.62,1.2,8.9,3.14c1,.57,2,1.19,3.07,1.87,2.49,1.54,5.3,3.28,9,5.27C69.32,16.37,75.5,25.69,75.5,35.7,75.5,52.27,58.68,65.75,38,65.75ZM38,3c-2.42,0-5,1.25-8.25,3.13-1.13.66-2.3,1.39-3.54,2.15-2.33,1.44-5,3.07-8,4.7C8.69,18.13,3,26.62,3,35.7,3,50.89,18.7,63.25,38,63.25S73,50.89,73,35.7C73,26.62,67.31,18.13,57.78,13,54,11,51.05,9.12,48.66,7.64c-1.09-.67-2.09-1.29-3-1.84C42.63,4,40.42,3,38,3Z" /></g><g id="Mouth"><g id="Background-2" data-name="Background"><path d="M45.05,43a8.93,8.93,0,0,1-2.92,4.71,6.81,6.81,0,0,1-4,1.88A6.84,6.84,0,0,1,34,47.71,8.93,8.93,0,0,1,31.12,43a.72.72,0,0,1,.8-.81H44.26A.72.72,0,0,1,45.05,43Z" style="fill:#b71422" /></g><g id="Tongue"><path id="Background-3" data-name="Background" d="M34,47.79a6.91,6.91,0,0,0,4.12,1.9,6.91,6.91,0,0,0,4.11-1.9,10.63,10.63,0,0,0,1-1.07,6.83,6.83,0,0,0-4.9-2.31,6.15,6.15,0,0,0-5,2.78C33.56,47.4,33.76,47.6,34,47.79Z" style="fill:#ff6164" /><path id="Outline-2" data-name="Outline" d="M34.16,47a5.36,5.36,0,0,1,4.19-2.08,6,6,0,0,1,4,1.69c.23-.25.45-.51.66-.77a7,7,0,0,0-4.71-1.93,6.36,6.36,0,0,0-4.89,2.36A9.53,9.53,0,0,0,34.16,47Z" /></g><path id="Outline-3" data-name="Outline" d="M38.09,50.19a7.42,7.42,0,0,1-4.45-2,9.52,9.52,0,0,1-3.11-5.05,1.2,1.2,0,0,1,.26-1,1.41,1.41,0,0,1,1.13-.51H44.26a1.44,1.44,0,0,1,1.13.51,1.19,1.19,0,0,1,.25,1h0a9.52,9.52,0,0,1-3.11,5.05A7.42,7.42,0,0,1,38.09,50.19Zm-6.17-7.4c-.16,0-.2.07-.21.09a8.29,8.29,0,0,0,2.73,4.37A6.23,6.23,0,0,0,38.09,49a6.28,6.28,0,0,0,3.65-1.73,8.3,8.3,0,0,0,2.72-4.37.21.21,0,0,0-.2-.09Z" /></g><g id="Face"><ellipse id="Right_Blush" data-name="Right Blush" cx="53.22" cy="40.18" rx="5.85" ry="3.44" style="fill:#febbd0" /><ellipse id="Left_Bluch" data-name="Left Bluch" cx="22.95" cy="40.18" rx="5.85" ry="3.44" style="fill:#febbd0" /><path id="Eyes" d="M25.7,38.8a5.51,5.51,0,1,0-5.5-5.51A5.51,5.51,0,0,0,25.7,38.8Zm24.77,0A5.51,5.51,0,1,0,45,33.29,5.5,5.5,0,0,0,50.47,38.8Z" style="fill-rule:evenodd" /><path id="Iris" d="M24,33.64a2.07,2.07,0,1,0-2.06-2.07A2.07,2.07,0,0,0,24,33.64Zm24.77,0a2.07,2.07,0,1,0-2.06-2.07A2.07,2.07,0,0,0,48.75,33.64Z" style="fill:#fff;fill-rule:evenodd" /></g></svg>
              Bun
            </p>
            <p class="flex items-center">
              <svg class="size-6 mr-2" fill="none" viewBox="0 0 54 33"><g clip-path="url(#prefix__clip0)"><path fill="#38bdf8" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd" /></g><defs><clipPath id="prefix__clip0"><path fill="#fff" d="M0 0h54v32.4H0z" /></clipPath></defs></svg>
              Tailwindcss
            </p>
            <p class="flex items-center">
              <svg class="size-6 mr-2" width="92pt" height="92pt" viewBox="0 0 92 92"><defs><clipPath id="a"><path d="M0 .113h91.887V92H0Zm0 0" /></clipPath></defs><g clip-path="url(#a)"><path style="stroke:none;fill-rule:nonzero;fill:#f03c2e;fill-opacity:1" d="M90.156 41.965 50.036 1.848a5.918 5.918 0 0 0-8.372 0l-8.328 8.332 10.566 10.566a7.03 7.03 0 0 1 7.23 1.684 7.034 7.034 0 0 1 1.669 7.277l10.187 10.184a7.028 7.028 0 0 1 7.278 1.672 7.04 7.04 0 0 1 0 9.957 7.05 7.05 0 0 1-9.965 0 7.044 7.044 0 0 1-1.528-7.66l-9.5-9.497V59.36a7.04 7.04 0 0 1 1.86 11.29 7.04 7.04 0 0 1-9.957 0 7.04 7.04 0 0 1 0-9.958 7.06 7.06 0 0 1 2.304-1.539V33.926a7.049 7.049 0 0 1-3.82-9.234L29.242 14.272 1.73 41.777a5.925 5.925 0 0 0 0 8.371L41.852 90.27a5.925 5.925 0 0 0 8.37 0l39.934-39.934a5.925 5.925 0 0 0 0-8.371" /></g></svg>
              Git
            </p>
            <p class="flex items-center">
              <svg class="size-6 mr-2" fill="none" height="128" viewBox="0 0 128 128" width="128" xmlns="http://www.w3.org/2000/svg"><rect fill="#3178c6" height="128" rx="6" width="128" /><path clip-rule="evenodd" d="m74.2622 99.468v14.026c2.2724 1.168 4.9598 2.045 8.0625 2.629 3.1027.585 6.3728.877 9.8105.877 3.3503 0 6.533-.321 9.5478-.964 3.016-.643 5.659-1.702 7.932-3.178 2.272-1.476 4.071-3.404 5.397-5.786 1.325-2.381 1.988-5.325 1.988-8.8313 0-2.5421-.379-4.7701-1.136-6.6841-.758-1.9139-1.85-3.6159-3.278-5.1062-1.427-1.4902-3.139-2.827-5.134-4.0104-1.996-1.1834-4.246-2.3011-6.752-3.353-1.8352-.7597-3.4812-1.4975-4.9378-2.2134-1.4567-.7159-2.6948-1.4464-3.7144-2.1915-1.0197-.7452-1.8063-1.5341-2.3598-2.3669-.5535-.8327-.8303-1.7751-.8303-2.827 0-.9643.2476-1.8336.7429-2.6079s1.1945-1.4391 2.0976-1.9943c.9031-.5551 2.0101-.9861 3.3211-1.2929 1.311-.3069 2.7676-.4603 4.3699-.4603 1.1658 0 2.3958.0877 3.6928.263 1.296.1753 2.6.4456 3.911.8109 1.311.3652 2.585.8254 3.824 1.3806 1.238.5552 2.381 1.198 3.43 1.9285v-13.1051c-2.127-.8182-4.45-1.4245-6.97-1.819s-5.411-.5917-8.6744-.5917c-3.3211 0-6.4674.3579-9.439 1.0738-2.9715.7159-5.5862 1.8336-7.844 3.353-2.2578 1.5195-4.0422 3.4553-5.3531 5.8075-1.311 2.3522-1.9665 5.1646-1.9665 8.4373 0 4.1785 1.2017 7.7433 3.6052 10.6945 2.4035 2.9513 6.0523 5.4496 10.9466 7.495 1.9228.7889 3.7145 1.5633 5.375 2.323 1.6606.7597 3.0954 1.5486 4.3044 2.3668s2.1628 1.7094 2.8618 2.6736c.7.9643 1.049 2.06 1.049 3.2873 0 .9062-.218 1.7462-.655 2.5202s-1.1 1.446-1.9885 2.016c-.8886.57-1.9956 1.016-3.3212 1.337-1.3255.321-2.8768.482-4.6539.482-3.0299 0-6.0305-.533-9.0021-1.6-2.9715-1.066-5.7245-2.666-8.2591-4.799zm-23.5596-34.9136h18.2974v-11.5544h-51v11.5544h18.2079v51.4456h14.4947z" fill="#fff" fill-rule="evenodd" /></svg>
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
          <img src="/homes.jpg" alt="" class="bg-center bg-cover opacity-30 absolute left-0 top-0 w-full h-auto transition duration-300 group-hover:opacity-40 aspect-square md:aspect-auto" />
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
    <div class="py-6 mt-10 px-8 md:px-32 fade-in bg-accent/50">
      <div class="flex flex-col md:flex-row md:space-x-4 my-auto text-xl items-center">
        <img src="/favicon.svg" alt="" class="size-8 inline-flex" />
        <p>Brock Mason Shaffer</p>
        <p class="font-semibold">Mason@CodedMasonry.com</p>
      </div>
    </div >
  )
}