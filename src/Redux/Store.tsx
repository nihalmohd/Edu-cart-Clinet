import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from "redux-persist";
import userReduser from './Slice/UserSlice'
import mentorReduser from './Slice/Mentorslice'
import adminReduser from './Slice/AdminSlice'
const persistConfig={
    key:'root',
    storage
}
const persistedUserReducer=persistReducer(persistConfig,userReduser )
const persistedMentorReducer =persistReducer(persistConfig,mentorReduser )
const persistedAdminReducer=persistReducer(persistConfig,adminReduser)

export const Store = configureStore({
    reducer: {
      user: persistedUserReducer,
      Mentor: persistedMentorReducer,
      Admin:persistedAdminReducer
    },
  });
export const persistor = persistStore(Store)