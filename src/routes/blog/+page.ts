import type { Post } from "$lib/blogs";
import type { PageLoad } from "./$types";

export const load = async function ({ fetch }) {
  const response = await fetch("/get-all-blogs");
  const posts: Post[] = await response.json();
  return { posts };
} satisfies PageLoad;
