
import { PayloadAction, Slice, createSlice } from '@reduxjs/toolkit';
import { RootState } from "@types";
import { LocationType, UserType } from './types';
export interface UserRootState {
    user: UserType,
    balance: number,
    currentLocation: LocationType,
    trips: number,
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
        birthDate: ''
    },
    currentLocation: { latitude: 0, longitude: 0 },
    balance: 0,
    trips: 0
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
        setBalance: (state: UserRootState, action: PayloadAction<number>) => {
            state.balance = action.payload
        },
        setTrips: (state: UserRootState, action: PayloadAction<number>) => {
            state.trips = action.payload
        },
        setLocation: (state: RootState, action: PayloadAction<{ latitude: number, longitude: number }>) => {
            state.currentLocation = { latitude: action.payload.latitude, longitude: action.payload.longitude }
        },
        logout: (state: UserRootState, action: PayloadAction<UserType>) => {
            state.user = action.payload
        },
    }
})

// Action Creators
const { setUser, updateUser, setBalance, setTrips, setLocation, logout } = slice.actions;

// App Object
const User = {
    slice,
    setUser,
    updateUser,
    setBalance,
    setTrips,
    setLocation,
    logout
};
export const selectUser = (state: RootState) => state?.user;

export { User };
