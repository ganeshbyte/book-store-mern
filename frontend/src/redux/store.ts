import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import orderReducer from "./features/order/orderSlice";
import booksApi from "./features/cart/bookApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    order: orderReducer,
    [booksApi.reducerPath]: booksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
