<script lang="ts">
  import { siteTitle, siteMetaDescription } from "$lib/appConfig";
  import { page } from "$app/stores";
  import Seo from "$lib/components/SEO.svelte";
  import Hero from "$lib/components/marketing/hero.svelte";
  import Features from "$lib/components/marketing/features.svelte";
  import Testimonials from "$lib/components/marketing/testimonials.svelte";
  import Pricing from "$lib/components/marketing/pricing.svelte";
  import Faqs from "$lib/components/marketing/faqs.svelte";

  const url = $page.url.toString();
</script>

<!-- Header and Footer inherited from layout -->

<Seo title={siteTitle} description={siteMetaDescription} {url} />
<Hero />
<Features />
<Testimonials />
<Pricing />
<Faqs />
