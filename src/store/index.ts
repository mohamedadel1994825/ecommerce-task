// // Config for redux globel store
// import { applyMiddleware, compose, createStore } from "redux";
// import thunk from "redux-thunk";
// import { persistStore } from "redux-persist";
// import { persistedReducer } from "./store";
// import reactotron from "@reactotron";

// export const reduxStore = (initialState = {}) => {
//   const middleware = compose(applyMiddleware(thunk));
//   const store = createStore(
//     persistedReducer,
//     initialState,
//     compose(middleware, reactotron.createEnhancer())
//   );
//   const persistor = persistStore(store);
//   return { store, persistor };
// };
export * from './hooks'
export * from './slices'
export * from './store'

