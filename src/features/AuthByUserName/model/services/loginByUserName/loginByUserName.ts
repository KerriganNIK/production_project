import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { UserSchema } from "@/enitites/User";
import type { LoginSchema } from "@/features/AuthByUserName";

export const loginApi = createApi({
    reducerPath: 'loginByUserNameApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
    endpoints: (build) => ({
        postLogin: build.mutation<UserSchema, LoginSchema>({
            query: (userData) => ({
                url: '/login',
                method: 'POST',
                body: userData
            })
        })
    })
});

export const { usePostLoginMutation } = loginApi;