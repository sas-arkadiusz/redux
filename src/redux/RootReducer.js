// Reduktor to funkcja, która wymaga stanu i akcji.
// Wykonuje na tej podstawie obliczenia i zwraca nowy stan.

import { createSlice } from "@reduxjs/toolkit";

// W przeciństwie do Store - w naszej aplikacji moze istniec
// wiele reduktorow.

// 1. Stworzenie obiektu koszyka
const cartContent = [
    { id: 1, name: 'Laptop', price: 5000, amount: 1 },
    { id: 2, name: 'Keyboard', price: 200, amount: 2 },
];

// 2. Stworzenie plasterka stanu koszyka
const cartSlice = createSlice({
    // 2.1. Nadanie nazwy plasterka
    name: 'cart',
    // 2.2. Nadanie stanu początkowego
    initialState: {
        // 2.3. Definiowanie pól w plasterku
        cart: cartContent
    },
    // 3. Tworzymy reduktory do manipulowania danymi w obrębie
    //    platerka cart
    reducers: {
        addProduct: (state, action) => {
            // akcja ma pole "payload", które przechowuje przesłane dane
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

//export const addProduct = cartSlice.actions.addProduct;
export const { addProduct, changeAmount } = cartSlice.actions;

export default cartSlice.reducer;