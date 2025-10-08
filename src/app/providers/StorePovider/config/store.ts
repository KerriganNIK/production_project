import type { ReducersMapObject } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import type { StateSchema } from "@/app/providers/StorePovider/config/StateSchema";
import { userReducer } from "@/enitites/User";
import { createReducerManager } from "@/app/providers/StorePovider/config/reducerManager";

export const createReduxStore = (initialState?: StateSchema) => {
    const rootReducers: ReducersMapObject<StateSchema> = {
        user: userReducer
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
};

// login: loginReducer,
// [loginApi.reducerPath]: loginApi.reducer