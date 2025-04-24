import {configureStore} from "@reduxjs/toolkit";
import type {StateSchema} from "@/app/providers/StorePovider/config/StateSchema";

export const createReduxStore = (initialState?: StateSchema) => {
    return configureStore<StateSchema>({
        reducer: {
        },
        devTools: __IS_DEV__,
        preloadedState: initialState
    });
};