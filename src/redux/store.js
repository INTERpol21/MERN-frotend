<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./slices/posts";
import { authReducer } from "./slices/auth";

=======
import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from './slices/posts';
//хранилище Redux
>>>>>>> ae90182b935736f5581ee809c4f88b3ebf566954
const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer,
  },
});

export default store;
