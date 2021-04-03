/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./auth";
import phonebookReducer from "./phonebook/phonebook-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const rootReducer = combineReducers({
  phonebook: phonebookReducer,
  auth: persistReducer(persistConfig, authReducer),
});
// const persistedReducer = persistReducer(persistConfig,rootReducer )

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

export default { store, persistor };
