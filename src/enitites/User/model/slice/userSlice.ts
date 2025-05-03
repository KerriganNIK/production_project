import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { User, UserSchema } from "@/enitites/User/model/types/user";
import { USER_LOCAL_STORAGE_KEY } from "@/shared/const/localStorage";


const initialState: UserSchema = {
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);

            if (user) {
                state.authData = JSON.parse(user);
            }
        },
        logoutAuthData: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
        }
    }
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;