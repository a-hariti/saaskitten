<script lang="ts">
  import { appName } from "$lib/appConfig";
  import UserNav from "./user-nav.svelte";

  import type { LayoutServerData } from "./$types";
  export let data: LayoutServerData;
</script>

<main class="grid main">
  <aside class="bg-muted/50 p-4 py-4">
    <div class="font-bold text-2xl">
      {appName}
    </div>
    <div class="mt-auto">
      <UserNav user={data.user} />
    </div>
  </aside>
  <div class="content">
    <slot />
  </div>
</main>

<style>
  .main {
    grid-template-columns: 250px 1fr;
    grid-template-rows: 1fr;
    min-height: 100vh;
  }
</style>
