import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice from "./ThemeSlice";

const Store = configureStore({
    reducer: {
        theme: ThemeSlice
    }
})

export default Store;