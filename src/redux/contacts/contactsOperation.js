import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { goitApi } from "../auth/authOperations";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await goitApi.get("/contacts");
      return data;
    } catch (error) {
      return thunkAPI.fulfillWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (body, thunkAPI) => {
    try {
      const { data } = await goitApi.post("/contacts", body);
      return data;
    } catch (error) {
      return thunkAPI.fulfillWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const { data } = await goitApi.delete(`/contacts/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.fulfillWithValue(error.message);
    }
  }
);
