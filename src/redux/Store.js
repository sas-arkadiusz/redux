// Przechowywa obiekt, który zawiera cały, scentralizowany stan.

import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./RootReducer";

const store = configureStore({ 
    reducer: {
        cart: RootReducer,
    }
})

export default store;