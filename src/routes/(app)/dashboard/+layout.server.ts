import type { LayoutServerLoad } from "./$types";

import type { Config } from "@sveltejs/adapter-vercel";
import { requireLogin } from "$lib/server/require-auth";
export const config: Config = {
  runtime: "edge"
};

export const load: LayoutServerLoad = async (event) => {
  const { user } = await requireLogin(event.locals.auth);

  return {
    user
  };
};
