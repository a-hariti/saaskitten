<script lang="ts">
  import type { PageData } from "./$types";
  import Seo from "$lib/components/SEO.svelte";
  import { Button } from "$lib/components/ui/button";
  import { page } from "$app/stores";
  import { appName } from "$lib/appConfig";

  const url = $page.url.toString();

  export let data: PageData;
</script>

<Seo title="Blog" description="A collection of posts about {appName}" {url} />

<section class="min-h-screen mx-auto mt-10 lg:mt-20 max-w-screen-md">
  <h1 class="text-4xl lg:text-6xl font-bold mb-14 mx-auto">Latest blog posts</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-14 mx-auto">
    {#each data.posts as post}
      <a href="/blog/{post.slug}">
        <article class="space-y-4 max-w-sm">
          <h2 class="text-2xl font-medium">{post.title}</h2>
          <p class="text-lg text-slate-500">{post.description}</p>
          <Button class="w-full md:w-auto">Read more</Button>
        </article>
      </a>
    {/each}
  </div>
</section>
