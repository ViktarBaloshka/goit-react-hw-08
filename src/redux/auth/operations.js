import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

export const goitApi = axios.create({
  baseURL: "https://connections-api.goit.global",
});

const setAuthHeader = (token) => {
  goitApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const registrationThunk = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await goitApi.post("/users/signup", credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      if (error.response.data.code === 11000) {
        toast.error("User already exist!", {
          duration: 2000,
          position: "top-right",
        });
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const loginThunk = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await goitApi.post("/users/login", credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      const { data } = await goitApi.post("/users/logout");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState().auth.token;
    if (!savedToken) {
      return thunkAPI.rejectWithValue("token is not exist");
    }
    setAuthHeader(savedToken);
    try {
      const { data } = await goitApi.get("/users/current");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
