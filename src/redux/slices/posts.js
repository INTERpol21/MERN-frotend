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
  reducers: {},
  //состояние нашего асинхронного акшена
  extraReducers: {
    //состояние загрузки
    [fetchPosts.pending]: (state) => {
      //обнуляем массив постов
      state.posts.items = [];
      //Если пришел запрос pending, то у части initialState/posts обновляем статус
      state.posts.status = "loading";
    },
    //состояние когда запрос выполнился успешно
    [fetchPosts.fulfilled]: (state, action) => {
      state.posts.items = action.payload;
      state.posts.status = "loaded";
    },
    //состояние ошибки
    [fetchPosts.rejected]: (state) => {
      state.posts.items = [];
      state.posts.status = "error";
    },
  },
});

export const postsReducer = postsSlice.reducer; // экспортируем редюсер