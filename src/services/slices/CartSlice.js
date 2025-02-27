import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
  isCartOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, selectedWeight, price } = action.payload;

      const itemIndex = state.items.findIndex(
        (item) => item.id === id && item.selectedWeight === selectedWeight
      );

      if (itemIndex >= 0) {
        state.items[itemIndex].count += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
          count: 1,
        });
      }

      state.totalPrice += price;
    },
    removeFromCart: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex >= 0) {
        state.totalPrice -=
          state.items[itemIndex].price * state.items[itemIndex].count;
        state.items.splice(itemIndex, 1);
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.count += 1;
        state.totalPrice += item.price;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        if (item.count > 1) {
          item.count -= 1;
          state.totalPrice -= item.price;
        } else {
          state.items = state.items.filter(
            (item) => item.id !== action.payload
          );
          state.totalPrice -= item.price;
        }
      }
    },
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  toggleCart,
} = cartSlice.actions;
export default cartSlice.reducer;
