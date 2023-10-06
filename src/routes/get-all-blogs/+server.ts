import { getBlogs } from "$lib/blogs";
import { json } from "@sveltejs/kit";

/*
 * This is used by /blog and /blog/[slug] loaders to avoid serialization errors
 */
export async function GET() {
  const posts = await getBlogs();
  return json(posts);
}
