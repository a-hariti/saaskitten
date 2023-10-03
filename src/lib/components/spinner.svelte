<script lang="ts">
  import { getForm } from "formsnap";
  import { Loader2 } from "lucide-svelte";
  const { delayed } = getForm();
</script>

{#if $delayed}
  <Loader2 class="mr-2 h-4 w-4 animate-spin" />
{/if}
