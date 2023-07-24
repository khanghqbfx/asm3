import { configureStore } from "@reduxjs/toolkit";
import popupSlice from "./Popup";


 const store =  configureStore({
    reducer: {
        popup : popupSlice.reducer
    }
 }
 )

export default store

 