<script lang="ts">
  import { appName } from "$lib/appConfig";

  import type { LayoutServerData } from "./$types";
  import { Button } from "$lib/components/ui/button";
  import { enhance } from "$app/forms";
  import { CreditCard, Zap } from "lucide-svelte";
  import { cn } from "$lib/utils";
  import { page } from "$app/stores";

  export let data: LayoutServerData;

  const sidebarNavItems = [
    {
      title: "Main",
      href: "/dashboard",
      icon: Zap
    },
    {
      title: "Subscription",
      href: "/dashboard/billing",
      icon: CreditCard
    }
  ];
</script>

<main class="grid main">
  <aside class="bg-accent py-4 h-screen flex flex-col justify-between">
    <div class="font-bold text-xl p-4">
      {appName}
    </div>
    <nav class={cn("flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1")}>
      {#each sidebarNavItems as item}
        {@const active = $page.url.pathname === item.href}
        <Button
          href={item.href}
          variant="ghost"
          class={cn(active ? "bg-white hover:bg-muted" : "hover:bg-transparent hover:underline", "justify-start py-6")}
        >
          <svelte:component this={item.icon} class={cn("mr-2", active && "fill-primary")} size="1.2rem" />
          {item.title}
        </Button>
      {/each}
    </nav>
    <div class="flex gap-4 items-center px-4">
      <p class="text-sm">
        {data.user.email}
      </p>
      <form action="/auth?/logout" method="POST" use:enhance>
        <Button type="submit" size="sm">Log out</Button>
      </form>
    </div>
  </aside>
  <div class="content">
    <slot />
  </div>
</main>

<style>
  .main {
    grid-template-columns: 300px 1fr;
    grid-template-rows: 1fr;
    min-height: 100vh;
  }
</style>
