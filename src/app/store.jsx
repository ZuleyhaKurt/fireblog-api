<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit"
import {authReducer} from "../features/AuthSlice"
export const store = configureStore({
    reducer: {
        auth:authReducer,
    }
})
=======
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/AuthSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
>>>>>>> 748437aea0ac10e46584867b2da38712271a98f8
