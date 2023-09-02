import {configureStore} from "@reduxjs/toolkit"
import userReducre from "../features/users/userSlice"

export const store = configureStore({
    reducer: userReducre,
})