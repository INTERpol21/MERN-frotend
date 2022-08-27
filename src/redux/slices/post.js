import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
//ассинхронный запрос
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const { data } = await axios.get("/posts")
    return data;
});

const initialState = {
  // статья
  posts: {
    items: [],
    status: "loading",
  },
  //теги
  tags: {
    items: [],
    status: "loading",
  },
};

const postsSlice = createSlice({
    name: "post",
    initialState,
    reducer: {},
});

export const postsReducer = postsSlice.reducer; // экспортируем редюсер