<script lang="ts">
  import { page } from "$app/stores";
  import Seo from "$lib/components/SEO.svelte";
  import type { PageData } from "./$types";

  const url = $page.url.toString();

  // this is an example of how to import a prism theme
  // check out the prism themes here: https://github.com/PrismJS/prism-themes
  import "./night-owl-prism.css";

  export let data: PageData;
  $: post = data;
</script>

<!-- SEO -->
<Seo title={post.title} description={post.description} {url} ogType="article" />

<section class="prose prose-slate prose-lg lg:prose-xl max-w-screen-md mx-auto mt-20 min-h-screen px-4">
  <article class="">
    <!-- Title -->
    <hgroup>
      <h1>{post.title}</h1>
    </hgroup>
    <svelte:component this={post.body} />
  </article>
</section>
