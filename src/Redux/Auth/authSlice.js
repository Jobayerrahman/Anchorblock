import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerApi, loginApi } from "./authApi";

const initialState = {
    isError:false,
    isLoading:false,
    accessToken: undefined,
    user: {},
    error:""
};

export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async (data) => {
        const user = await registerApi(data);

        localStorage.setItem("auth",JSON.stringify({accessToken: user.token}));

        return user;
    }
);

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (data) => {
        const user = await loginApi(data);

        localStorage.setItem("auth",JSON.stringify({accessToken: user.token}));

        return user;
    }
);


const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) =>{
                state.isError   = false;
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state, action)=>{
                state.isLoading = true;
                state.accessToken = action.payload.token;
                state.user = action.payload;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isError   = false;
                state.isLoading = true;
                state.accessToken = undefined;
                state.user = {};
                state.error =  action.error?.message;
            })
            .addCase(loginUser.pending, (state) =>{
                state.isError   = false;
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action)=>{
                state.isLoading = true;
                state.accessToken = action.payload.token;
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isError   = false;
                state.isLoading = true;
                state.accessToken = undefined;
                state.user = {};
                state.error =  action.error?.message;
            });
    },
});

export default authSlice.reducer;