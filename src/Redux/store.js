import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./Auth/authSlice";

const store = configureStore({
    reducer: {
        auth: authSliceReducer,
    },
});

export default store;