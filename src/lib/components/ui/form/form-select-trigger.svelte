<script lang="ts">
  import * as Select from "$lib/components/ui/select";
  import type { Select as SelectPrimitive } from "bits-ui";
  import { getFormField } from "formsnap";

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type $$Props = SelectPrimitive.TriggerProps & {
    placeholder?: string;
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type $$Events = SelectPrimitive.TriggerEvents;
  const { attrStore } = getFormField();
  export let placeholder = "";
</script>

<Select.Trigger {...$$restProps} {...$attrStore} on:click on:keydown>
  <Select.Value {placeholder} />
  <slot />
</Select.Trigger>
