import { combineReducers } from '@reduxjs/toolkit';
import { App, Location, Ride, Trip, User, Vehicle, Wallet } from './slices';
const combinedReducer = combineReducers({
    app: App?.slice?.reducer,
    user: User?.slice?.reducer,
    location: Location?.slice?.reducer,
    ride: Ride?.slice?.reducer,
    trip: Trip?.slice?.reducer,
    vehicle: Vehicle?.slice?.reducer,
    wallet: Wallet?.slice?.reducer
    //   _loading: loadingSlice.reducer,
    //   [Tokens.slice.name]: Tokens.slice.reducer,
    //   [User.slice.name]: User.slice.reducer,
    //   [Splash.slice.name]: Splash.slice.reducer,
    //   [Search.slice.name]: Search.slice.reducer,
    //   [Setting.slice.name]: Setting.slice.reducer,
    //   [Location.slice.name]: Location.slice.reducer,
    //   [Payment.slice.name]: Payment.slice.reducer,
    //   [Notifications.slice.name]: Notifications.slice.reducer,
    //   [Favourite.slice.name]: Favourite.slice.reducer,
});

export default combinedReducer;
