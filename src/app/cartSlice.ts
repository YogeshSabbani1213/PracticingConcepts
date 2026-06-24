//createslice
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


interface Product {
    id: number,
    title: string,
    price: number,
    category: string,
    description: string;
    images: string;
    quantity: number;
}

interface CartState{
    items:Product[];
}

const initialState:CartState={
    items:[],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addtoCart: (state,action:PayloadAction<Product>) => {
            const existingItem = state.items.find(item=>item.id===action.payload.id)
            if(existingItem){
                existingItem.quantity+=1
            }
            else{
                state.items.push({...action.payload,quantity:1})
            }
         },
        removeFromCart: (state,action:PayloadAction<number>) => {
            state.items=state.items.filter(item => item.id!==action.payload)
        },
    }
})

export const { addtoCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;