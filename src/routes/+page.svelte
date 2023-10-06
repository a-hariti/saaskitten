<script lang="ts">
  import Seo from "$lib/components/SEO.svelte";
  import { siteTitle, siteMetaDescription } from "$lib/appConfig";
  import { page } from "$app/stores";
  const url = $page.url.toString();
</script>

<Seo title={siteTitle} description={siteMetaDescription} {url} />

<section>
  <h1>Welcome to SvelteKit</h1>
</section>
