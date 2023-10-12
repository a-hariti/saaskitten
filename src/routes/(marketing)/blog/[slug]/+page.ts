import { error } from "@sveltejs/kit";
import type { EntryGenerator, PageLoad } from "./$types";
import { getBlogs } from "$lib/blogs";

export const prerender = true;

const posts = getBlogs();

export const entries: EntryGenerator = async () => {
  return posts;
};

export const load = async function ({ params }) {
  const post = await posts.then((posts) => posts.find((post) => post.slug === params.slug));

  if (!post) throw error(404, `Could not find this post`);

  return post;
} satisfies PageLoad;
