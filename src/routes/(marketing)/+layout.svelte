<script lang="ts">
  import "../../app.postcss";

  import GoogleAnalytics from "$lib/components/analytics/GoogleAnalytics.svelte";
  import { GA_TRACKING_ID } from "$lib/appConfig";
  import Navbar from "$lib/components/navbar.svelte";
  import { page } from "$app/stores";
  import Footer from "$lib/components/marketing/footer.svelte";

  $: isDashboardPage = $page.url.pathname === "/dashboard";
</script>

<GoogleAnalytics {GA_TRACKING_ID} />

<!--
  This enables us to render the navbar with the user on the dashboard and avoid
  hitting the database on every page load on marketing pages, keeping them fast
  and avoids consuming db cpu time.
-->
{#if !isDashboardPage}
  <Navbar />
{/if}

<slot />

{#if !isDashboardPage}
  <Footer />
{/if}
