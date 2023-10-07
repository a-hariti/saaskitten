<script lang="ts">
  import Section from "./section.svelte";

  const features = [
    {
      title: "A Pain killer",
      description: "Users focus on the pain points. Show them how you can solve their problem."
    },
    {
      title: "Makes them rich",
      description: "They care how it saves them time or makes them money."
    },
    {
      title: "A breeze",
      description: "UX is always a priority. Lower friction make it easy for them to use your product."
    },
    {
      title: "A Vitamin",
      description: "Some nice to have features are great too"
    }
  ];
</script>

<Section>
  <span slot="title">The best way to solve their problem</span>
  <div class="mt-16 max-w-2xl mx-auto grid sm:grid-cols-2 gap-8 md:gap-12">
    {#each features as feature}
      <div class="flex gap-x-5">
        <div class="grow">
          <h3 class="text-lg font-semibold">{feature.title}</h3>
          <p class="mt-1 text-muted-foreground">
            {feature.description}
          </p>
        </div>
      </div>
    {/each}
  </div>
</Section>
