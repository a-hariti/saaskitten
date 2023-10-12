<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Menu, X } from "lucide-svelte";
  import { slide } from "svelte/transition";
  import { appName } from "$lib/appConfig";

  let open = false;
</script>

<nav class="container mx-auto">
  <div class="relative flex h-16 items-center justify-between">
    <div class="flex flex-1 items-center sm:items-stretch">
      <div class="flex flex-shrink-0 items-center">
        <a href="/" class="font-bold text-xl">
          {appName}
        </a>
      </div>
      <!-- Desktop menu -->
      <div class="hidden sm:block sm:ml-6 md:ml-auto">
        <div class="flex space-x-4">
          <Button href="/blog" variant="link">Blog</Button>
          <Button href="/dashboard" variant="link">Dashboard</Button>
          <Button href="/auth/login" size="sm">Sign in</Button>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
        <!-- Mobile menu open close button-->
        {#if open}
          <Button
            variant="link"
            size="icon"
            type="button"
            on:click={() => (open = false)}
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Close main menu</span>
            <X class="block h-6 w-6" aria-hidden="true" />
          </Button>
        {:else}
          <Button
            variant="link"
            size="icon"
            type="button"
            on:click={() => (open = true)}
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <Menu class="block h-6 w-6" aria-hidden="true" />
          </Button>
        {/if}
      </div>
    </div>
  </div>

  {#key open}
    <!-- Mobile menu -->
    <div
      class="sm:hidden w-screen absolute top-[50px] left-1/2 -translate-x-1/2 bg-background mx-auto"
      class:hidden={!open}
      id="mobile-menu"
      transition:slide={{ axis: "y", duration: 300 }}
    >
      <div class="space-y-1 px-2 pb-3 pt-2">
        <Button class="w-full" href="/blog" variant="link">Blog</Button>
        <Button class="w-full" href="/dashboard" variant="link">Dashboard</Button>

        <Button class="w-full" href="/auth/login" size="sm">Login</Button>
      </div>
    </div>
  {/key}
</nav>
