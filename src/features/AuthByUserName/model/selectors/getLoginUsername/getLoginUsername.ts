import type { StateSchema } from "@/app/providers/StorePovider";

export const getLoginUsername = (state: StateSchema) => state?.login?.username || '';