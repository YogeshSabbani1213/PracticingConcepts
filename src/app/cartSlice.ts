// createSlice
import {createSlice} from '@reduxjs/toolkit';

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    //cartSlice-actions
    reducers:{
        addtoCart:(state,action)=>{
            
        },
        deleteCart:()=>{},
    },
})

export const{addtoCart,deleteCart}=cartSlice.actions;
export default cartSlice.reducer

