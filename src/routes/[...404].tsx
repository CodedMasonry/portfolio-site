import { A } from "@solidjs/router";

export default function NotFound() {
  return (
    <main class="text-center mx-auto p-4 space-y-2">
      <h1 class="md:mt-48 text-5xl font-bold text-primary">Hey, this doesn't exist.</h1>
      <h2 class="text-2xl font-semibold">At least, at the moment it doesn't.</h2>
      <h3>And if it does, how did you find this?</h3>
    </main>
  );
}