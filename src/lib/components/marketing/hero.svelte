<script>
  import { Button } from "../ui/button";
</script>

<section class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24">
  <h1 class="font-bold text-4xl md:text-5xl py-6 md:py-10 max-w-xl text-center mx-auto">
    Something bold to catch visitor's attention
  </h1>
  <p class="text-lg text-muted-foreground text-center mx-auto max-w-[50ch]">
    You have 5 seconds to convince them to read for next 30 seconds. Make it count.
  </p>

  <div class="mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center">
    <Button href="auth/signup">Get Started</Button>
    <Button variant="secondary">Do something else</Button>
  </div>
</section>
