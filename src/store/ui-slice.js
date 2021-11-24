import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isCartVisible: false,
    notification: null
  },
  reducers: {
    toggleCart(state) {
      state.isCartVisible = !state.isCartVisible;
    },
    setNotification(state, action) {
      const { status, title, message } = action.payload;
      state.notification = {
        status,
        title,
        message
      };
    }
  }
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
