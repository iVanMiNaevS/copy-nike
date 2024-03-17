import { combineReducers, configureStore } from "@reduxjs/toolkit";
import shoesSlice from "./slices/shoesSlice";
import basketSlice from "./slices/basketSlice";
import userSlice from "./slices/userSlice";
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
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["shoes", "user"],
};

const rootReducer = combineReducers({
  basket: basketSlice,
  shoes: shoesSlice,
  user: userSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persister = persistStore(store);
export default store;
