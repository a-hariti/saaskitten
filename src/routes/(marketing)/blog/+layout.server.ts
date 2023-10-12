import type { LayoutServerLoad } from "./$types";

export const load = async function ({ fetch }) {
  const blogs = await fetch("/blog/api/get-all-blogs").then((res) => {
    return res.json();
  });
  return { blogs };
} satisfies LayoutServerLoad;
