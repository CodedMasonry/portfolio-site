import { A } from "@solidjs/router";
import { Button } from "~/components/ui/button";

export default function Home() {
  return (
    <main>
      <div class="bg-gradient-to-b from-accent to-background">
        <div class="mx-40 translate-y-36">
          <div
            class="flex"
          >
            <img
              src="/drone_highway.jpg"
              alt="Headshot"
              class="flex size-96 aspect-square rounded-2xl shadow-xl"
            />
            <div class="typewriter flex flex-col ml-8 mt-8">
              <h1 class="text-4xl font-bold max-w-96">Hello, I'm Brock.</h1>
              <h3 class="text-xl text-primary">Software Developer, Cybersecurity Enthusiast</h3>
              <p class="mt-4 max-w-3xl">
                I'm a high school student from Ohio with several years of programming experience,
                focusing on network programming, cryptography, and malware development.
                Having a diverse skill set in these areas gives me a well-rounded understanding of the cybersecurity landscape.
                I'm also passionate about bridging the gap between the technical and business aspects of technology,
                emphasizing clear communication and collaboration to push results.
              </p>
              <div class="flex flex-row mt-8 space-x-4">
                <Button as={A} href="/resume" size="lg">Resume.md</Button>
                <Button as={A} href="/#about" variant="outline" size="lg">About Me</Button>
                <Button as={A} href="https://github.com/CodedMasonry" variant="outline" size="lg">
                  <img src="/icons/github-mark.svg" class="size-6 mr-2 invert" />
                  Github
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="h-screen pt-48 px-40">
        <h2 id="about" class="font-bold text-3xl">Who Am I?</h2>
        
      </div>
    </main>
  );
}