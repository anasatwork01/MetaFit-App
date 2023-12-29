import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import configSlice from "./app-config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

//combine reducers
const appReducer = combineReducers({
  auth: authSlice.reducer,
  appconfig: configSlice.reducer,
});

const rootReducer = (state, action) => {
  if (action.type === "auth/logout") {
    (state = undefined), AsyncStorage.clear();
  }
  return appReducer(state, action);
};

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: ["appconfig"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
