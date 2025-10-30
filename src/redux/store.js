import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./Slice/categorySlice"
import productReducer from "./Slice/productSlice"
import wishReducer from "./Slice/wishSlice"

const myStore = configureStore ({
    reducer:{
        category: categoryReducer,
        products:productReducer,
        wishlist: wishReducer,
    }
})

export default myStore 