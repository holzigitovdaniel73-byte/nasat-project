import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../../axios/apiClient";

export const getCategory = createAsyncThunk(
  "category/getCategory",
  async (_, { rejectWithValue }) => {
    try {
      const res = await apiClient.get("/products/category-list");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message || "not found");
    }
  }
)

export const getProduct = createAsyncThunk(
  "product/getProduct",
  async (_, { rejectWithValue }) => {
    try {
      const res = await apiClient.get("/products");
      return res.data.products;
    } catch (error) {
      return rejectWithValue(error.message || "not found");
    }
  }
)
