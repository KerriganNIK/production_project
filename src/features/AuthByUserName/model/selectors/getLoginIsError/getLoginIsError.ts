import type { StateSchema } from "@/app/providers/StorePovider";

export const getLoginIsError = (state: StateSchema) => state?.login?.isError || false;