<script>
  import "../app.postcss";

  import GoogleAnalytics from "$lib/components/analytics/GoogleAnalytics.svelte";
  import { GA_TRACKING_ID } from "$lib/appConfig";
  import Navbar from "$lib/components/navbar.svelte";
  import { Footer } from "$lib/components/ui/card";
</script>

<GoogleAnalytics {GA_TRACKING_ID} />

<Navbar />

<slot />
<Footer />
