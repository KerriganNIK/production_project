import type { UserSchema } from "@/enitites/User";
import type { LoginSchema } from "@/features/AuthByUserName";
import type { loginApi } from "@/features/AuthByUserName";
import type { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";

export interface StateSchema {
    user: UserSchema;

    //Асинхронные редьюсеры
    login?: LoginSchema;

    [loginApi.reducerPath]?: ReturnType<typeof loginApi.reducer>
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>,
    add: (key: StateSchemaKey, reducer: Reducer) => void,
    remove: (key: StateSchemaKey, reducer: Reducer) => void,
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}