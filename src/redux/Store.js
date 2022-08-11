// Przechowywa obiekt, który zawiera cały, scentralizowany stan.

import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./RootReducer";

// 1. Uzuepełnie konfiguracji Store
const store = configureStore({ 
    reducer: {
        cart: RootReducer,
    }
})

export default store;