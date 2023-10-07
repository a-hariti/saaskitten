<script lang="ts">
  import { siteTitle, siteMetaDescription } from "$lib/appConfig";
  import { page } from "$app/stores";
  import Seo from "$lib/components/SEO.svelte";
  import Hero from "$lib/components/marketing/hero.svelte";
  import Features from "$lib/components/marketing/features.svelte";
  import Testimonials from "$lib/components/marketing/testimonials.svelte";
  import Pricing from "$lib/components/marketing/pricing.svelte";
  import Faqs from "$lib/components/marketing/faqs.svelte";
  import Footer from "$lib/components/marketing/footer.svelte";

  const url = $page.url.toString();
</script>

<Seo title={siteTitle} description={siteMetaDescription} {url} />
<Hero />
<Features />
<Testimonials />
<Pricing />
<Faqs />
<Footer />
