import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    users: [],
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            const user = {
                id: nanoid(),
                name: action.payload[0],
                age: action.payload[1],
                mobile: action.payload[2]
            } 
            state.users.push(user)
        },
        removeUser: (state, action) => {
            state.users = state.users.filter((user)=> 
            user.id !== action.payload)
        },
        removeAll: (state, action) => {
            state.users = action.payload
        }
    }    
})

export const {addUser, removeUser, removeAll} = userSlice.actions

export default userSlice.reducer  