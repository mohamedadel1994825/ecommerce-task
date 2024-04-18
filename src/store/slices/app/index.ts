
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
    totalStepsAppTourHome: number,
    currentStepAppTourHome: number,
    isAppTourHomeFinished: boolean,
    isAppTour: boolean,
    theme: ThemeType,
    language: {},
    initialSteps: [],
    isSedraThemeEnabled: boolean,
    // isGroupRideSurveySubmitted: boolean,
    isSplashScreen: boolean,
    onBoardingActiveSlide: number,
    isCameraPermissionEnabled: boolean,
    isDisableNotificationBadge: boolean,
    isCancelNotificationBadge: boolean

}
const initialState: AppRootState = {
    totalStepsAppTourHome: 19,
    currentStepAppTourHome: 0,
    isAppTourHomeFinished: false,
    isAppTour: false,
    theme: light,
    language: AvailableLanguages.en,
    initialSteps: [],
    isSedraThemeEnabled: false,
    // isGroupRideSurveySubmitted: false,
    isSplashScreen: true,
    onBoardingActiveSlide: 0,
    isCameraPermissionEnabled: false,
    isDisableNotificationBadge: false,
    isCancelNotificationBadge: false
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
        setInitialSteps: (state: AppRootState, action: PayloadAction<[]>) => {
            console.log('setInitialSteps', action.payload)
            state.initialSteps = action.payload
        },
        removeInitialStep: (state: AppRootState, action: PayloadAction<string[]>) => {
            let _initialSteps = state.initialSteps.filter(
                (value: any) => value !== action.payload
            );
            state.initialSteps = _initialSteps
        },
        setIsSplashScreen: (state: AppRootState, action: PayloadAction<boolean>) => {
            state.isSplashScreen = action.payload
        },
        setOnBoardingActiveSlide: (state: AppRootState, action: PayloadAction<number>) => {
            state.onBoardingActiveSlide = action.payload
        },
        setIsSedraTheme: (state: AppRootState, action: PayloadAction<boolean>) => {
            state.isSedraThemeEnabled = action.payload
        },
        // submitGroupRideSurvey: (state: AppRootState, action: PayloadAction<boolean>) => {
        //     state.isGroupRideSurveySubmitted = action.payload
        // },
        addStepAppTourHome: (state: AppRootState, action: PayloadAction<number>) => {
            state.currentStepAppTourHome = action.payload
        },
        finishStepsAppTourHome: (state: AppRootState, action: PayloadAction<{ isAppTourHomeFinished: boolean, currentStepAppTourHome: number }>) => {
            state.isAppTourHomeFinished = action.payload.isAppTourHomeFinished,
                state.currentStepAppTourHome = action.payload.currentStepAppTourHome
        },
        setIsCameraPermissionEnabled: (state: AppRootState, action: PayloadAction<boolean>) => {
            state.isCameraPermissionEnabled = action.payload
        },
        handleNoficationBadge: (state: AppRootState, action: PayloadAction<boolean>) => {
            state.isDisableNotificationBadge = action.payload
        },
        cancelNoficationBadge: (state: AppRootState, action: PayloadAction<boolean>) => {
            state.isCancelNotificationBadge = action.payload
        },
    }
})

// Action Creators
const {
    setTheme, setLanguage,
    setInitialSteps,
    removeInitialStep,
    setIsSplashScreen,
    setOnBoardingActiveSlide,
    setIsSedraTheme,
    submitGroupRideSurvey,
    addStepAppTourHome,
    finishStepsAppTourHome,
    setIsCameraPermissionEnabled,
    handleNoficationBadge,
    cancelNoficationBadge
} = slice.actions;

// App Object
const App = {
    slice,
    setTheme,
    setLanguage,
    setInitialSteps,
    removeInitialStep,
    setIsSplashScreen,
    setOnBoardingActiveSlide,
    setIsSedraTheme,
    submitGroupRideSurvey,
    addStepAppTourHome,
    finishStepsAppTourHome,
    setIsCameraPermissionEnabled,
    handleNoficationBadge,
    cancelNoficationBadge
};
export const selectApp = (state: RootState) => state.app;

export { App };
