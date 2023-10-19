<script lang="ts">
  import { CheckCircle2 } from "lucide-svelte";
  import { Button } from "$lib/components/ui/button";
  import * as Alert from "$lib/components/ui/alert";
  import { enhance } from "$app/forms";

  import type { ActionData } from "./$types";
  export let form: ActionData;
</script>

<section class="max-w-screen-sm mx-auto pt-10">
  <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
    <h1 class="text-xl font-medium text-gray-900 dark:text-white p-0">Please verify your email</h1>
    {#if form?.success}
      <Alert.Root>
        <CheckCircle2 class="h-4 w-4" />
        <Alert.Title>Success</Alert.Title>
        <Alert.Description>Your email verification link was resent</Alert.Description>
      </Alert.Root>
    {:else}
      <p>Your email verification link was sent to your inbox</p>
    {/if}
    <form method="post" use:enhance>
      <Button type="submit" value="Resend">Resend</Button>
    </form>
  </div>
</section>
