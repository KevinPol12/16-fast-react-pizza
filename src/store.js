import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";

/*The configure store automatically combines the Reducers, creates 
the store, applies the middleware -thunk- and enables the redux dev tools */
const store = configureStore({
  reducer: { user: userReducer },
});

export default store;
