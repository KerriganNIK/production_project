import type {ReactNode} from "react";
import { Provider } from 'react-redux';
import {createReduxStore} from "@/app/providers/StorePovider";
import type {DeepPartial} from "@reduxjs/toolkit";
import type {StateSchema} from "@/app/providers/StorePovider/config/StateSchema";

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider = ({children, initialState}: StoreProviderProps) => {
    const store = createReduxStore(initialState as StateSchema);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};