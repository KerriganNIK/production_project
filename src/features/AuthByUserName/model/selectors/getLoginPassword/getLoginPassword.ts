import type { StateSchema } from "@/app/providers/StorePovider";

export const getLoginPassword = (state: StateSchema) => state?.login?.password || '';