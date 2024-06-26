import { configureStore } from "@reduxjs/toolkit";
import { messageSlice } from "./states/message.state";

export default configureStore({
    reducer: { 
        message: messageSlice.reducer 
    },
})