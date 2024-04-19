
import { setLocalization } from "@common";
import { AvailableLanguages, setI18nConfig } from "@language";
import reactotron from "@reactotron";
import { PayloadAction, Slice, createSlice } from '@reduxjs/toolkit';
import {
    dark,
    light,
    sedra
} from "@theme";
import { RootState } from "@types";
import { ThemeType } from "./types";
// import { RootState } from "@types";
export interface AppRootState {
    theme: ThemeType,
    language: {},
    isSedraThemeEnabled: boolean,
    isSplashScreen: boolean,
}
const initialState: AppRootState = {
    theme: light,
    language: AvailableLanguages.en,
    isSedraThemeEnabled: false,
    isSplashScreen: true,
}

const slice: Slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        // Give case reducers meaningful past-tense "event"-style names
        setTheme: (state: AppRootState, action: PayloadAction<string>) => {
            state.theme = action.payload === "light"
                ? light
                : action.payload === "sedra"
                    ? sedra
                    : dark
            // "Mutating" update syntax thanks to Immer, and no `return` needed

        },
        setLanguage: (state: AppRootState, action: PayloadAction<string>) => {
            reactotron.log('setLanguage', action.payload)
            setLocalization(action.payload)
            setI18nConfig(action.payload);
            state.language = AvailableLanguages[action.payload] || AvailableLanguages.en
        },

        setIsSplashScreen: (state: AppRootState, action: PayloadAction<boolean>) => {
            state.isSplashScreen = action.payload
        },

        setIsSedraTheme: (state: AppRootState, action: PayloadAction<boolean>) => {
            state.isSedraThemeEnabled = action.payload
        },
    }
})

// Action Creators
const {
    setTheme,
    setLanguage,
    setIsSplashScreen,
    setIsSedraTheme,
} = slice.actions;

// App Object
const App = {
    slice,
    setTheme,
    setLanguage,
    setIsSplashScreen,
    setIsSedraTheme,
};
export const selectApp = (state: RootState) => state.app;

export { App };
