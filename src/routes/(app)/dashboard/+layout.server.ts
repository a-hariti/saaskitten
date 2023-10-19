import type { LayoutServerLoad } from "./$types";
import { requireLogin } from "$lib/server/require-auth";

export const load: LayoutServerLoad = async (event) => {
  const { user } = await requireLogin(event.locals.auth);

  return {
    user
  };
};
