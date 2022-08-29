import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
<<<<<<< HEAD

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const { data } = await axios.get("/posts");
  return data;
});

export const fetchTags = createAsyncThunk("posts/fetchTags", async () => {
  const { data } = await axios.get("/tags");
  return data;
});

export const fetchRemovePost = createAsyncThunk(
  "posts/fetchRemovePost",
  async (id) => axios.delete(`/posts/${id}`)
);

const initialState = {
=======
//ассинхронный запрос
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const { data } = await axios.get("/posts")
    return data;
});



const initialState = {
  // статья
>>>>>>> ae90182b935736f5581ee809c4f88b3ebf566954
  posts: {
    items: [],
    status: "loading",
  },
<<<<<<< HEAD
=======
  //теги
>>>>>>> ae90182b935736f5581ee809c4f88b3ebf566954
  tags: {
    items: [],
    status: "loading",
  },
};

const postsSlice = createSlice({
<<<<<<< HEAD
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    // Получение статей
    [fetchPosts.pending]: (state) => {
      state.posts.items = [];
      state.posts.status = "loading";
    },
=======
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
>>>>>>> ae90182b935736f5581ee809c4f88b3ebf566954
    [fetchPosts.fulfilled]: (state, action) => {
      state.posts.items = action.payload;
      state.posts.status = "loaded";
    },
<<<<<<< HEAD
=======
    //состояние ошибки
>>>>>>> ae90182b935736f5581ee809c4f88b3ebf566954
    [fetchPosts.rejected]: (state) => {
      state.posts.items = [];
      state.posts.status = "error";
    },
<<<<<<< HEAD

    // Получение тегов
    [fetchTags.pending]: (state) => {
      state.tags.items = [];
      state.tags.status = "loading";
    },
    [fetchTags.fulfilled]: (state, action) => {
      state.tags.items = action.payload;
      state.tags.status = "loaded";
    },
    [fetchTags.rejected]: (state) => {
      state.tags.items = [];
      state.tags.status = "error";
    },

    // Удаление статьи
    [fetchRemovePost.pending]: (state, action) => {
      state.posts.items = state.posts.items.filter(
        (obj) => obj._id !== action.meta.arg
      );
    },
  },
});

export const postsReducer = postsSlice.reducer; // экспортируем редюсер
=======
  },
});

export const postsReducer = postsSlice.reducer; // экспортируем редюсер
>>>>>>> ae90182b935736f5581ee809c4f88b3ebf566954
