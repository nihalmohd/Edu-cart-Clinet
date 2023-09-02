import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from "redux-persist";
import userReduser from './Slice/UserSlice'
// import adminReduser from './Slice/AdminSlice'
const persistConfig={
    key:'root',
    storage
}
const persistedReducer=persistReducer(persistConfig,userReduser )
// const persistedAdminReducer=persistReducer(persistConfig,adminReduser)

export const Store = configureStore({
    reducer: {
      user: persistedReducer, // Use the persisted reducer here
    },
  });
export const persistor = persistStore(Store)