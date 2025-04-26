import { configureStore } from "@reduxjs/toolkit";
import type { StateSchema } from "@/app/providers/StorePovider/config/StateSchema";
import { userReducer } from "@/enitites/User";
import { loginApi, loginReducer } from "@/features/AuthByUserName";
    
export const createReduxStore = (initialState?: StateSchema) => {
    return configureStore<StateSchema>({
        reducer: {
            user: userReducer,
            login: loginReducer,
            [loginApi.reducerPath]: loginApi.reducer
        },
        devTools: __IS_DEV__,
        preloadedState: initialState
    });
};