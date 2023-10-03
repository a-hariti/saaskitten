import { z } from "zod";
export const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" })
});

export type FormSchema = typeof formSchema;
