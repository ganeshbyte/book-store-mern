import { createSlice } from "@reduxjs/toolkit";
import { IBook } from "../../../interface/Book";
import Swal from "sweetalert2";

//state interface
export interface CartState {
  items: number;
  cartItems: IBook[];
}

//initial state
const initialState: CartState = {
  cartItems: [],
  items: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item._id === action.payload.id
      );
      if (!existingItem) {
        console.log(existingItem);

        state.cartItems.push(action.payload);
        Swal.fire({
          title: "Item is added into the cart!",
          text: "You clicked the button!",
          timer: 1000,
          icon: "success",
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          title: "Item Already Present In the Cart!",
          text: "You!",
          timer: 1000,
          icon: "error",
          showConfirmButton: false,
        });
      }
    },
    removeFromCart: (state, action) => {
      if (state.cartItems.length > 0) {
        state.cartItems = state.cartItems.filter(
          (item) => item._id !== action.payload._id
        );
        Swal.fire({
          title: "Item is removed from the cart!",
          text: "You clicked the button!",
          timer: 1000,
          icon: "success",
          showConfirmButton: false,
        });
      } else {
        alert("No item in the cart");
      }
    },
    increment: (state) => {
      state.items + 1;
    },
    decrement: (state) => {
      state.items - 1;
    },
  },
});

export const { increment, decrement, addToCart, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
