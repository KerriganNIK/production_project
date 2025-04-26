import type { UserSchema } from "@/enitites/User";
import type { LoginSchema } from "@/features/AuthByUserName";
import type { loginApi } from "@/features/AuthByUserName";

export interface StateSchema {
    user: UserSchema;
    login: LoginSchema;
    [loginApi.reducerPath]: ReturnType<typeof loginApi.reducer>
}