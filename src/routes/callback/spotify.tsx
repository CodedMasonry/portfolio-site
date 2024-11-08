import { useSearchParams } from "@solidjs/router";
import { createSignal } from "solid-js";
import { Button } from "~/components/ui/button";

export default function Home() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [copied, setCopied] = createSignal(false);

    const copyText = async () => {
        try {
            // Text to copy
            const textToCopy = searchParams.code as string;
            // Copy to clipboard
            await navigator.clipboard.writeText(textToCopy);
            setCopied(true);
            // Reset the "Copied!" message after a few seconds
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    return (
        <main class="flex flex-col items-center mx-auto mt-64">
            <h1 class="text-5xl text-center font-bold text-primary p-2">We got an authenticate token!</h1>
            <h2 class="text-2xl text-center text-secondary-foreground pb-8">Copy this code and follow the instructions on the application</h2>
            <Button onMouseDown={copyText} class="h-14 max-w-3xl px-4" size="lg" variant="outline">
                <p class="text-xl truncate overflow-hidden mr-2">
                    {searchParams.code}
                </p>
                <img src="/icons/copy.svg" alt="" class="size-10 ml-auto invert" />
            </Button>
            <p class="text-center text-xs text-accent mt-2">Code: {searchParams.code}</p>
            {copied() && <p class="text-green-500 text-center mt-2">Copied to clipboard!</p>}
        </main>
    );
}