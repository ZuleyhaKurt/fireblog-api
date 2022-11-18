<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
    displayName: "",
    email: "",
    password: ""
};
const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action?.payload;
        },
        clearUser: (state, action) => {
            state.user=initialState
        }
    }
});
export const {setUser,clearUser}=AuthSlice.actions
export default AuthSlice.reducer
=======
import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  user: {
    displayName: "",
    email: "",
    pasword: "",
  },
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action?.payload;
    },
    clearUser: (state, action) => {
      state.user = initialState;
    },
  },
});

export const { setUser, clearUser } = AuthSlice.actions;

export default AuthSlice.reducer;
>>>>>>> 748437aea0ac10e46584867b2da38712271a98f8
