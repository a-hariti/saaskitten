<script lang="ts">
  import * as Form from "$lib/components/ui/form";
  import { Button } from "$lib/components/ui/button";
  import Spinner from "$lib/components/spinner.svelte";
  import FormMessage from "$lib/components/form-message.svelte";
  import { formSchema } from "./schema";

  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<section class="max-w-md mx-auto pt-10">
  <Form.Root method="POST" form={data.form} schema={formSchema} let:config class="p-6 sm:p-4 space-y-4">
    <h1 class="text-xl font-medium text-gray-900 dark:text-white">Sign in</h1>
    <Form.Field {config} name="email">
      <Form.Item>
        <Form.Label>Email</Form.Label>
        <Form.Input />
        <Form.Validation />
      </Form.Item>
    </Form.Field>
    <Button type="submit">
      <Spinner />
      Reset Password</Button
    >

    <div class="flex md:flex-row flex-col gap-4 items-start">
      <p class="text-sm font-light text-gray-500 dark:text-gray-400">
        Go back to
        <Button href="/auth/login" class="px-2" variant="link">Login</Button>
      </p>
    </div>
    <FormMessage />
  </Form.Root>
</section>
