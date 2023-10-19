import { z } from "zod";
export const formSchema = z.object({
  password: z.string().min(8).max(100, {
    message: "Password must be between 8 and 100 characters"
  })
});

export type FormSchema = typeof formSchema;
