
import { PayloadAction, Slice, createSlice } from '@reduxjs/toolkit';
import { RootState } from "@types";
export interface LocationRootState {
    isLocationServicePermission: boolean,
    isDisableAppLocationPermission: boolean,
    isFirstTimeAppLocationPermission: boolean
}
const initialState: LocationRootState = {
    isLocationServicePermission: false,
    isDisableAppLocationPermission: false,
    isFirstTimeAppLocationPermission: false
}

const slice: Slice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        // Give case reducers meaningful past-tense "event"-style names
        setLocationServicePermission: (state, action: PayloadAction<boolean>) => {
            state.isLocationServicePermission = action.payload
        },
        setAppLocationPermission: (state: RootState, action: PayloadAction) => {
            state.isDisableAppLocationPermission = action.payload
        },
        setIsFirstTimeAppLocationPermission: (state: RootState, action: PayloadAction) => {
            state.isFirstTimeAppLocationPermission = action.payload
        },
    }
})

// Action Creators
const { setLocationServicePermission, setAppLocationPermission, setIsFirstTimeAppLocationPermission } = slice.actions;

// App Object
const Location = {
    slice,
    setLocationServicePermission,
    setAppLocationPermission,
    setIsFirstTimeAppLocationPermission
};
export const selectLocation = (state: RootState) => state.location;

export { Location };
