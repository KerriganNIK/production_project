import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { LoginSchema } from "../types/login";

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false
};

const loginSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setUsername(state: LoginSchema, action: PayloadAction<string>) {
            state.username = action.payload;
        },
        setPassword(state, action: PayloadAction<string>) {
            state.password = action.payload;
        }
    }
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;

