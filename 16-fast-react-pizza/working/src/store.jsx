import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./features/users/userSlice.js";
import cartReducer from "./features/cart/cartSlice.jsx";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
