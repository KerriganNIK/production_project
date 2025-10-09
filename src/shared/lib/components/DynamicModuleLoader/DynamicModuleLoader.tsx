import { useDispatch, useStore } from "react-redux";
import type { ReduxStoreWithManager } from "@/app/providers/StorePovider";
import type { FC } from "react";
import { useEffect } from "react";
import type { Reducer } from "@reduxjs/toolkit";
import type { StateSchemaKey } from "@/app/providers/StorePovider/config/StateSchema";

export type ReducerList = {
    [name in StateSchemaKey]?: Reducer
}

type ReducerListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
    reducers: ReducerList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const {
        children,
        reducers,
        removeAfterUnmount = true
    } = props;

    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
            store.reducerManager.add(name, reducer);
        });
        dispatch({ type: "@INIT loginReducer reducer" });

        return () => {
            Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
                if (removeAfterUnmount) {
                    store.reducerManager.remove(name, reducer);
                }
            });
            dispatch({ type: "@DESTROY loginReducer reducer" });
        };
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {children}
        </>
    );
};