import type { StateSchema } from "@/app/providers/StorePovider";

export const getLoginState = (state: StateSchema)=> state.login;