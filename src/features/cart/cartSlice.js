import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // cartItems: [],
  cartItems: [
    {
      id: 12,
      name: "Mediterranean",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //payload = newItem
      state.cartItems.push(action.payload);
    },
    deleteItem(state, action) {
      //payload = id
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload,
      );
    },
    increaseItemQuantity(state, action) {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item.quantity >= 4) return;
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cartItems.find((item) => item.id === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      /*Within the action or reducer, we can call another defined action or reducer in the slice for reusing the code with the slice.caseReducers.action(state,action)*/
      if (item.quantity <= 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cartItems = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

/*We export this calculations on redux state to centralize logic, is this way we can just reuse it anywhere else in the application. The naming convention is to use "get".*/
export const getTotalCartQuantity = (store) =>
  store.cart.cartItems.reduce((acc, cur) => acc + cur.quantity, 0);

export const getTotalCartPrice = (store) =>
  store.cart.cartItems.reduce((acc, cur) => acc + cur.totalPrice, 0);

export const getCartItems = (store) => store.cart.cartItems;

/*We can also pass parameters to perform calculation to our redux queries without exporting them as functions*/
export const getCurrentQuantityById = (id) => (store) =>
  store.cart.cartItems.find((item) => item.id === id)?.quantity ?? 0;

// function getPosition() {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// }

// async function fetchAddress() {
//   // 1) We get the user's geolocation position
//   const positionObj = await getPosition();
//   const position = {
//     latitude: positionObj.coords.latitude,
//     longitude: positionObj.coords.longitude,
//   };

//   // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
//   const addressObj = await getAddress(position);
//   const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

//   // 3) Then we return an object with the data that we are interested in
//   return { position, address };
// }
