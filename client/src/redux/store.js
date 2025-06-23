import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistReducer } from "redux-persist";
import {persistStore} from "redux-persist";

const rootReducer = combineReducers({ user: userReducer });

const persistConfig = { key: "root", storage, version: 1 };

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store); // For simplicity, using store as persistor. In a real app, you would use `persistStore` from 'redux-persist' to create a persistor.
