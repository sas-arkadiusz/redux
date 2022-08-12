// Reduktor to funkcja, która wymaga stanu i akcji.
// Wykonuje na tej podstawie obliczenia i zwraca nowy stan.

import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "./StorageHandler";

const cartContent = [
    { id: 1, name: 'Laptop', price: 5000, amount: 1 },
    { id: 2, name: 'Keyboard', price: 200, amount: 2 },
];

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        //cart: cartContent
        cart: loadState().cart.cart
    },
    reducers: {
        addProduct: (state, action) => {
            state.cart.push(action.payload);
        },
        changeAmount: (state, action) => {
            state.cart = state.cart.map((product) => 
                product.id === action.payload.id
                ? { ...product, amount: action.payload.amount }
                : product 
            )
        }
    }
});

export const { addProduct, changeAmount } = cartSlice.actions;

export default cartSlice.reducer;

/*
1. Dodaj możliwość usuwania produktów z koszyka.
2. Dodaj możliwość dodawania do koszyka.
    1. Należy sprawdzić, czy produkt jest już w koszyku.
*/