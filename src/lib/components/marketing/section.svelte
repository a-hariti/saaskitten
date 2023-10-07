<div class="max-w-screen-md px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Title -->
  <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 class="text-2xl sm:text-3xl lg:text-4xl font-semibold">
      <slot name="title" />
    </h2>
    {#if $$slots.subtitle}
      <p class="mt-4 text-gray-600">
        <slot name="subtitle" />
      </p>
    {/if}
  </div>
  <!-- End Title -->
  <slot />
</div>
