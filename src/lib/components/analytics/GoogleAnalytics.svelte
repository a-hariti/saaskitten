<script lang="ts">
  import { page } from "$app/stores";
  export let GA_TRACKING_ID: string;
  const isProd = import.meta.env.PROD;

  $: {
    if (isProd && typeof gtag !== "undefined") {
      gtag("config", GA_TRACKING_ID, {
        page_title: document.title,
        page_path: $page.url.pathname
      });
    }
  }
</script>

<svelte:head>
  {#if isProd || true}
    <script async src="https://www.googletagmanager.com/gtag/js?id={GA_TRACKING_ID}">
    </script>
    <!-- silence the XSS warning, because we are controlling the script content with no user input -->
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html `
    <script>
      window.dataLayer = window.dataLayer || [];

      /* eslint-disable-next-line  no-undef */
      function gtag() { dataLayer.push(arguments);}
      gtag("js", new Date());
      gtag("config", "${GA_TRACKING_ID}");
    </script>`}
  {/if}
</svelte:head>
