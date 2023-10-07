<script>
  import { Button } from "../ui/button";
</script>

<section class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24">
  <!-- Title -->
  <div class="mt-5 max-w-xl text-center mx-auto">
    <h1 class="font-bold text-4xl md:text-5xl">Something bold to catch visitor's attention</h1>
  </div>
  <!-- End Title -->

  <div class="mt-5 text-center mx-auto max-w-[50ch]">
    <p class="text-lg text-muted-foreground">
      Tell them what you can do to help them and entice them to keep reading for next 30 seconds.
    </p>
  </div>

  <!-- Buttons -->
  <div class="mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center">
    <Button href="auth/signup">Get Started</Button>
    <Button variant="secondary">Do something else</Button>
  </div>
  <!-- End Buttons -->
</section>
