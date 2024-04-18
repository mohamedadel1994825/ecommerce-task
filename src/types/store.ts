import { reduxStore } from '@store';
import reducer from '../store/reducers';
const { store } = reduxStore
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof reducer>;
export type AppStore = ReturnType<typeof store>
