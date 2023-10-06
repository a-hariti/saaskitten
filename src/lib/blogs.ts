import { SvelteComponentTyped } from "svelte";

class BlogBody extends SvelteComponentTyped<Record<string, never>> {}

export type Post = {
  title: string;
  slug: string;
  description: string;
  cover_image: string | null;
  published: boolean;
  // I'm not really sure how to type this
  body: typeof BlogBody;
};
export async function getBlogs() {
  const posts: Post[] = [];

  const paths = import.meta.glob("/src/content/*.md", { eager: true });

  for (const path in paths) {
    const file = paths[path];
    const slug = path.split("/").at(-1)?.replace(".md", "");

    if (file && typeof file === "object" && "metadata" in file && slug) {
      const metadata = file.metadata as Omit<Post, "slug">;
      const post = {
        ...metadata,
        slug,
        body:
          // GOD forgive me for I have given in to the eslint tyranny 🤣
          (file as unknown as { default: typeof BlogBody }).default
      } satisfies Post;
      post.published && posts.push(post);
    }
  }

  return posts;
}
