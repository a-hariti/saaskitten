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
    <h1 class="text-xl font-medium text-gray-900 dark:text-white">Sign up</h1>
    <Form.Field {config} name="email">
      <Form.Item>
        <Form.Label>Email</Form.Label>
        <Form.Input type="email" />
        <Form.Validation />
      </Form.Item>
    </Form.Field>
    <Form.Field {config} name="password">
      <Form.Item>
        <Form.Label>Password</Form.Label>
        <Form.Input type="password" name="password" />
      </Form.Item>
    </Form.Field>

    <Form.Button class="min-w-[100px]"><Spinner /> Sign up</Form.Button>
    <div class="flex md:flex-row flex-col gap-4 items-start">
      <p class="text-sm font-light text-muted-foreground">
        Already have an account?
        <Button href="/auth/login" variant="link" class="px-2">Login</Button>
      </p>
    </div>
    <div class="mt-6">
      <FormMessage />
    </div>
  </Form.Root>
</section>
