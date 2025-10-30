import { createSlice } from "@reduxjs/toolkit";

const wishSlice = createSlice({
    name: "wish",
    initialState: {
        items: []
    },
    reducers: {
        addWish: (state, action) => {
            state.items.push(action.payload)
        },
        removeWish: (state, action) => {
            state.items = state.items.filter((x) => x.id != action.payload)
        }
    }
})

export const { addWish, removeWish } = wishSlice.actions;
export default wishSlice.reducer;
