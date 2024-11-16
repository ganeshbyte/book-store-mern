import { createSlice } from "@reduxjs/toolkit";
import { cartSlice } from "../cart/cartSlice";
import { IOrder } from "../../../interface/Order";

interface ordersState {
  orders: IOrder[];
}

const initialState: ordersState = {
  orders: [],
};

export const OrderSlice = createSlice({
  name: "orderSlice",
  initialState: initialState,
  reducers: {
    addIntoOrder: (state, action) => {
      if (action.payload) {
        state.orders.push(action.payload);
      }
    },
    cancelOrder: (state, action) => {
      if (state.orders.length > 0) {
        state.orders = state.orders.filter(
          (item: IOrder) => item.id !== action.payload.id
        );
      }
    },
  },
});

export const { addIntoOrder, cancelOrder } = OrderSlice.actions;

export default OrderSlice.reducer;
