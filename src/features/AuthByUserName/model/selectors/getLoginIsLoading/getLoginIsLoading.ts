import type { StateSchema } from "@/app/providers/StorePovider";

export const getLoginIsLoading = (state: StateSchema) => state?.login?.isLoading || false;