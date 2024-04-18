
import { PayloadAction, Slice, createSlice } from '@reduxjs/toolkit';
import { RootState } from "@types";
export interface TripRootState {
    trip: any,
    activeTrips: any[],
    isTripListScrollable: boolean,
    isTripEnded: boolean | undefined,
    isLastTrip: boolean | undefined,
    remoteMessageId: string,
    tripRefId: string,
    multiTripRefId:string

}// import { RootState } from "@types";
const initialState: TripRootState = {
    trip: null,
    activeTrips: [],
    isTripListScrollable: true,
    isTripEnded: false || undefined,
    isLastTrip: false || undefined,
    remoteMessageId: '',
    tripRefId: '',
    multiTripRefId:''
}

const slice: Slice = createSlice({
    name: 'trip',
    initialState,
    reducers: {
        // Give case reducers meaningful past-tense "event"-style names
        setTrip: (state: TripRootState, action: PayloadAction<any>) => {
            state.trip = action.payload
            // "Mutating" update syntax thanks to Immer, and no `return` needed

        },
        // should pass setIsTripEnded payload as object so change in all app 
        setIsTripEnded: (state: TripRootState, action: PayloadAction<{ isTripEnded: boolean | undefined, isLastTrip: boolean | undefined }>) => {
            state.isTripEnded = action.payload.isTripEnded,
                state.isLastTrip = action.payload.isLastTrip
        },
        setTripRefId: (state: TripRootState, action: PayloadAction<string>) => {
            state.tripRefId = action.payload
        },
        setActiveTrips: (state: TripRootState, action: PayloadAction<string[]>) => {
            state.activeTrips = action.payload
        },
        setIsRemoteMessageId: (state: TripRootState, action: PayloadAction<string>) => {
            state.remoteMessageId = action.payload
        },
        removeActiveTrip: (state: TripRootState, action: PayloadAction<string>) => {
            const newTrips = state.activeTrips.filter(
                (trip) => trip.tripId !== action.payload
            )
            state.activeTrips = newTrips
        },
        enableScollTripsList: (state: TripRootState, action: PayloadAction<boolean>) => {
            state.isTripListScrollable = action.payload
        },
        setMuliTripRefId: (state: TripRootState, action: PayloadAction<string>) => {
            state.multiTripRefId = action.payload
            // "Mutating" update syntax thanks to Immer, and no `return` needed

        },
    }
})

// Action Creators
const { setTrip,
    setActiveTrips,
    removeActiveTrip,
    enableScollTripsList,
    setIsTripEnded,
    setIsRemoteMessageId,
    setTripRefId,
    setMuliTripRefId
} = slice.actions;

// Trip Object
const Trip = {
    slice,
    setTrip,
    setActiveTrips,
    removeActiveTrip,
    enableScollTripsList,
    setIsTripEnded,
    setIsRemoteMessageId,
    setTripRefId,
    setMuliTripRefId
};
export const selectTrip = (state: RootState) => state.trip;

export { Trip };
