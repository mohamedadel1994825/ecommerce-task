import { configureStore } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '@types';
import { MMKV } from "react-native-mmkv";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import reactotron from "reactotron-react-native";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    Storage,
    persistReducer, persistStore,
} from 'redux-persist';
import reducer from './reducers';

export const appStorage = new MMKV()
export const reduxStorage: Storage = {
    setItem: (key: any, value: any) => {
        appStorage.set(key, value)
        return Promise.resolve(true)
    },
    getItem: (key: any) => {
        const value = appStorage.getString(key)
        return Promise.resolve(value)
    },
    removeItem: (key: any) => {
        appStorage.delete(key)
        return Promise.resolve()
    },
}
const persistConfig = {
    key: 'root',
    storage: reduxStorage,
    // whitelist: ["ride", "vehicles"],
    // balcklist: ["user", "app","location"],
    balcklist: ["user", "app"],
}
const composeEnhancers = reactotron.createEnhancer!(); // Adjust this as per your Reactotron configuration

let persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
    reducer: persistedReducer,
    enhancers: (getDefaultEnhancers) => getDefaultEnhancers().concat(composeEnhancers),
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: __DEV__ ? true : false,
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }),
});

const persistor = persistStore(store);

export const reduxStore = {
    store,
    persistor
}
const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
