<script>
  import { plans } from "$lib/appConfig";
  import { Button } from "../ui/button";
  import { Check } from "lucide-svelte";
  import Section from "./section.svelte";
</script>

<Section>
  <span slot="title">Pricing</span>
  <span slot="subtitle">An offer so good they feel stupid saying no</span>

  <div class="mt-12 grid sm:grid-cols-2 gap-6 mx-auto max-w-screen-sm">
    {#each plans as plan}
      <!-- Card -->
      <div
        class="flex flex-col border text-center rounded-xl p-8"
        class:border-2={plan.highlight}
        class:border-secondary-forground={!plan.highlight}
        class:border-primary={plan.highlight}
      >
        <h4 class="font-medium text-lg">{plan.name}</h4>
        <span class="mt-5 font-bold text-5xl">
          <span class="font-bold text-2xl -mr-2">$</span>
          {plan.price}
          <span class="font-medium text-2xl text-muted-foreground">/month</span>
        </span>
        <p class="mt-2 text-sm text-muted-foreground">{plan.subtitle}</p>

        <ul class="mt-7 mb-auto space-y-2.5 text-sm">
          {#each plan.features as feature}
            <li class="flex space-x-2">
              <Check class="w-4 h-4 mr-2" />
              {feature}
            </li>
          {/each}
        </ul>

        {#if plan.highlight}
          <Button href="/auth/signup" class="mt-5">Sign up</Button>
        {:else}
          <Button href="/auth/signup" variant="secondary" class="mt-5">Sign up</Button>
        {/if}
      </div>
      <!-- End Card -->
    {/each}
  </div>
</Section>
