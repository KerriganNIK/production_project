import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { LoginSchema } from "@/features/AuthByUserName";
import type { User } from "@/enitites/User/model/types/user";

export const loginApi = createApi({
    reducerPath: 'loginByUserNameApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
    endpoints: (build) => ({
        postLogin: build.mutation<User, LoginSchema>({
            query: (userData) => ({
                url: '/login',
                method: 'POST',
                body: userData
            })
        })
    })
});

export const { usePostLoginMutation } = loginApi;