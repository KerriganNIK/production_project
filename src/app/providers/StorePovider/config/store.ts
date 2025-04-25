import { configureStore } from "@reduxjs/toolkit";
import type { StateSchema } from "@/app/providers/StorePovider/config/StateSchema";
import { userReducer } from "@/enitites/User";
    
export const createReduxStore = (initialState?: StateSchema) => {
    return configureStore<StateSchema>({
        reducer: {
            user: userReducer
        },
        devTools: __IS_DEV__,
        preloadedState: initialState
    });
};