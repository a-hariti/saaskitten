<script lang="ts">
  import { page } from "$app/stores";
  import * as Alert from "$lib/components/ui/alert";
  import { AlertCircle, CheckCircle2 } from "lucide-svelte";

  import { getForm } from "formsnap";
  const { message } = getForm();
</script>

{#if $message}
  {#if $page.status == 200}
    <Alert.Root>
      <CheckCircle2 class="h-4 w-4" />
      <Alert.Title>Info</Alert.Title>
      <Alert.Description>{$message}</Alert.Description>
    </Alert.Root>
  {:else}
    <Alert.Root variant="destructive">
      <AlertCircle class="h-4 w-4" />
      <Alert.Title>Error</Alert.Title>
      <Alert.Description>{$message}</Alert.Description>
    </Alert.Root>
  {/if}
{/if}
