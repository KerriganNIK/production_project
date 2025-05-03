import type { StateSchema } from "@/app/providers/StorePovider";

export const getUserAuthData = (state: StateSchema) => state.user.authData;