<script lang="ts">
  const features = [
    {
      title: "A Pain killer",
      description: "Customers tend to focus on the pain points. Show them how you can solve their problem."
    },
    {
      title: "A Vitamin",
      description: "Some nice to have features are great too"
    },
    {
      title: "A breeze",
      description: "UX is always a priority. Make it easy for them to use your product."
    },
    {
      title: "Zero headcahes",
      description: "Lower friction means more conversions. Make product afforances obvious and minimize cognitive load"
    }
  ];
</script>

<section class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <h2 class="font-bold text-2xl md:text-3xl text-center">The best way to solve their problem</h2>
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
</section>
