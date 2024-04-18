
import { PayloadAction, Slice, createSlice } from '@reduxjs/toolkit';
import { RootState } from "@types";
export interface RideRootState {
    minRadiusMeters: number,
}// import { RootState } from "@types";
const initialState: RideRootState = {
    minRadiusMeters: 500,
}
const slice: Slice = createSlice({
    name: 'ride',
    initialState,
    reducers: {
        setMinRadiusMeters: (state: RideRootState, action: PayloadAction<number>) => {
            state.minRadiusMeters = action.payload
        },
    }
})

// Action Creators
const { setMinRadiusMeters } = slice.actions;

// App Object
const Ride = {
    slice,
    setMinRadiusMeters,
};
export const selectRide = (state: RootState) => state?.ride;

export { Ride };
