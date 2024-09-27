import { A } from "@solidjs/router";
import { ModeToggle } from "~/components/ThemeToggle";

export default function Nav() {
  return (
    <div class="flex flex-row bg-secondary/50 shadow p-1 items-center">
      <div class="lg:w-48">
        <A class="dark:invert" href="/" aria-label="Home Page">
          mason
        </A>
      </div>
      <div class="flex ml-auto p-2 align-middle">
        <ModeToggle />
      </div>
    </div>
  );
}
