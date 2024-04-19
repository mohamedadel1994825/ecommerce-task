
import { PayloadAction, Slice, createSlice } from '@reduxjs/toolkit';
import { RootState } from "@types";
import { UserType } from './types';
export interface UserRootState {
    user: UserType,
}// import { RootState } from "@types";
const initialState: UserRootState = {
    user: {
        userId: '',
        userName: '',
        userSurname: '',
        email: '',
        contact: '',
        statusCode: '',
        gender: '',
        birthDate: '',
        image: ''
    },
}

const slice: Slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // Give case reducers meaningful past-tense "event"-style names
        setUser: (state: UserRootState, action: PayloadAction<UserType>) => {
            state.user = action.payload
            // "Mutating" update syntax thanks to Immer, and no `return` needed
        },
        updateUser: (state: UserRootState, action: PayloadAction<UserType>) => {
            state.user.userName = action.payload.userName
            state.user.userSurname = action.payload.userSurname
            state.user.userSurname = action.payload.userSurname
            state.user.gender = action.payload.gender
            state.user.birthDate = action.payload.birthDate
            // "Mutating" update syntax thanks to Immer, and no `return` needed
        },
        logout: (state: UserRootState, action: PayloadAction<UserType>) => {
            state.user = action.payload
        },
    }
})

// Action Creators
const { setUser, updateUser, logout } = slice.actions;

// App Object
const User = {
    slice,
    setUser,
    updateUser,
    logout
};
export const selectUser = (state: RootState) => state?.user;

export { User };
