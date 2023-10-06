<script>
  import "../app.postcss";

  import GoogleAnalytics from "$lib/components/analytics/GoogleAnalytics.svelte";
  import { GA_TRACKING_ID } from "$lib/appConfig";
</script>

<GoogleAnalytics {GA_TRACKING_ID} />

<slot />
