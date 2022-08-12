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
            // 1. Sprawdzamy, czy produkt jest już w koszyku
            let productInCart = false;
            state.cart.forEach((product) => {
                if (product.id === action.payload.id) {
                    productInCart = true;
                }
            })

            // 2. Jeżeli produkt jest już w koszyku to 
            //    zwiększamy jego liczbę
            if (productInCart) {
                state.cart = state.cart.map((product) =>
                    product.id === action.payload.id
                        ? { ...product, amount: product.amount + 1 }
                        : product
                )
            }
            // 3. Jeżeli produktu nie było to dodajemy go do koszyka 
            else {
                state.cart.push(action.payload);
            }

        },
        changeAmount: (state, action) => {
            state.cart = state.cart.map((product) =>
                product.id === action.payload.id
                    ? { ...product, amount: action.payload.amount }
                    : product
            )
        },
        removeProduct: (state, action) => {
            state.cart = state.cart.filter((product) => {
                return product.id !== action.payload.id
            })
        }
    }
});

export const { addProduct, changeAmount, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;

/*
1. Dodaj możliwość usuwania produktów z koszyka.
2. Dodaj możliwość dodawania do koszyka.
    1. Należy sprawdzić, czy produkt jest już w koszyku.
*/