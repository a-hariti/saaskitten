<script>
  import { appName, twitterHandle } from "$lib/appConfig";
  import { Twitter } from "lucide-svelte";
  import Button from "../ui/button/button.svelte";
</script>

<footer class="container py-10 px-4 sm:px-6 lg:px-8 mx-auto">
  <div class="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
    <div class="flex justify-between items-center text-center md:text-left">
      <p class="text-sm text-muted-foreground w-full">© {new Date().getFullYear()} {appName}. All rights reserved.</p>
    </div>

    <ul class="text-center">
      <li
        class="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['·'] before:text-gray-300 dark:before:text-gray-600"
      >
        <Button variant="link" href="#" class="font-normal text-muted-foreground p-0">About</Button>
      </li>
      <li
        class="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['·'] before:text-gray-300 dark:before:text-gray-600"
      >
        <Button variant="link" href="#" class="font-normal text-muted-foreground p-0">Privacy Policy</Button>
      </li>
      <li
        class="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['·'] before:text-gray-300 dark:before:text-gray-600"
      >
        <Button variant="link" href="/blog" class="font-normal text-muted-foreground p-0">Blog</Button>
      </li>
    </ul>

    <!-- Social Brands -->
    <div class="text-center md:text-right space-x-2">
      <Button
        href="https://x.com/{twitterHandle}"
        variant="ghost"
        size="icon"
        class="rounded-full text-muted-foreground"
      >
        <Twitter class="w-4 h-4" />
      </Button>
    </div>
    <!-- End Social Brands -->
  </div>
</footer>
