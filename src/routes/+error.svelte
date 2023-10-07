<script lang="ts">
  import "../app.postcss";

  import Button from "$lib/components/ui/button/button.svelte";
  import { page } from "$app/stores";

  // add your custom error messages here
  const erroMessages: Record<number, string> = {
    404: "Sorry, we couldn’t find the page you’re looking for.",
    403: "Sorry, you are not authorized to access this page.",
    500: "Sorry, something went wrong on our end."
  };
</script>

<main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div class="text-center">
    <p class="font-semibold text-accent-foreground">{$page.status}</p>
    {#if $page.error?.message}
      <h1 class="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
        {$page.error?.message}
      </h1>
    {/if}
    {#if erroMessages[$page.status]}
      <p class="mt-6 leading-7 text-muted-foreground">{erroMessages[$page.status]}</p>
    {/if}
    <div class="mt-10 flex items-center justify-center gap-x-6">
      <Button href="/">Go back home</Button>
      <!-- <Button href="/" variant='outline'>Contact Support</Button> -->
    </div>
  </div>
</main>
