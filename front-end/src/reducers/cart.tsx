import { createSlice } from '@reduxjs/toolkit'

const cart = createSlice({
    name : "cart",
    initialState : [],
    reducers: {
        addToCart(state, action){
            state = [...state, action.payload];
        },
        removeFromCart(state, action) {
            state = state.filter(x=>x!=action.payload);
        },
        clearCart(state, action){
            state = [];
        }
    }
});

export const { addToCart,removeFromCart,clearCart } = cart.actions
export default cart.reducer