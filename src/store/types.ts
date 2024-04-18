import { Action, ThunkAction } from '@reduxjs/toolkit';
import { reduxStore } from '@store';
import { RootState } from '@types';
const { store } = reduxStore

export type TStore = typeof store;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;