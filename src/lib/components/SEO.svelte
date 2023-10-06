<script lang="ts">
  export let title: string;
  export let description: string;
  export let ogImage: string | undefined = undefined;
  export let url: string | undefined = undefined;
  export let keywords: string | undefined = undefined;
  export let ogType = "website";
  export let applicationName: string | undefined = undefined;
</script>

<svelte:head>
  <title>SaasKitten | a Sveltekit Saas starter</title>
  <meta name="title" content={title} />
  <meta property="og:title" content={title} />

  {#if url}
    <link rel="canonical" href={url} />
    <meta property="og:url" content={url} />
    <meta property="twitter:url" content={url} />
  {/if}

  <meta name="description" content={description} />
  <meta property="og:description" content={description} />
  <meta name="twitter:description" content={description} />

  <meta property="og:type" content={ogType} />

  {#if ogImage}
    <meta property="og:image" content={ogImage} />
    <meta name="twitter:image" content={ogImage} />
  {/if}

  {#if keywords}
    <meta name="keywords" content={keywords} />
  {/if}

  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={title} />

  {#if applicationName}
    <meta name="application-name" content={applicationName} />
  {/if}
</svelte:head>
