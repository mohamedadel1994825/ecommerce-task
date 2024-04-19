import { combineReducers } from '@reduxjs/toolkit';
import { App, User } from './slices';
const combinedReducer = combineReducers({
    app: App?.slice?.reducer,
    user: User?.slice?.reducer,
});

export default combinedReducer;
