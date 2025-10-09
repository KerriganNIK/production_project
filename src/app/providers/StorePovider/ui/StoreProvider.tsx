import type { ReactNode } from "react";
import { Provider } from 'react-redux';
import { createReduxStore } from "@/app/providers/StorePovider";
import type { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import type { StateSchema } from "@/app/providers/StorePovider/config/StateSchema";

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider = ({ children, initialState, asyncReducers }: StoreProviderProps) => {
    const store = createReduxStore(initialState as StateSchema, asyncReducers as ReducersMapObject<StateSchema>);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};