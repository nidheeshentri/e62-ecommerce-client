import { createSlice } from '@reduxjs/toolkit'

// name, function, intialValue

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: []
    },
    reducers: {
        updateCart: (state, action)=>{
            state.value = action.payload
        }   
    }
})

export const {updateCart} = cartSlice.actions
export default cartSlice.reducer