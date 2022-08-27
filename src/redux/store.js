import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from './slices/post';
//хранилище Redux
const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

export default store;
