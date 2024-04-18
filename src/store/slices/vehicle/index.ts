
import { PayloadAction, Slice, createSlice } from '@reduxjs/toolkit';
import { RootState } from "@types";
import { VehicleType } from './types';
// import { VehicleRootState } from "./types";
// import { RootState } from "@types";
export interface VehicleRootState {
    vehicleData: VehicleType,
    enteredOrScannedCode: string,
    bikes: any[],
    scooters: any[],
}
const initialState: VehicleRootState = {
    vehicleData: { scooterId: "" },
    enteredOrScannedCode: "",
    bikes: [],
    scooters: [],
}

const slice: Slice = createSlice({
    name: 'vehicle',
    initialState,
    reducers: {
        setVehicle: (state: VehicleRootState, action: PayloadAction<VehicleType>) => {
            state.vehicleData = action.payload
        },
        setEnteredOrScannedCode: (state: VehicleRootState, action: PayloadAction<string>) => {
            state.enteredOrScannedCode = action.payload
        },
        setVehicles: (state: VehicleRootState, action: PayloadAction<any[]>) => {
            state.bikes = action.payload.filter(
                (vehicle) => vehicle.vehicleType == "bicycle"
            ),
                state.scooters = action.payload.filter(
                    (vehicle) => vehicle.vehicleType == "scooter"
                )
        },
    }
})

// Action Creators
const { setVehicle, setEnteredOrScannedCode, setVehicles } = slice.actions;

// App Object
const Vehicle = {
    slice,
    setVehicle,
    setEnteredOrScannedCode,
    setVehicles
};
export const selectVehicle = (state: RootState) => state?.vehicle;

export { Vehicle };
