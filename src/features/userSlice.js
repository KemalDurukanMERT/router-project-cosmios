import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: null
}

const userSlice = createSlice({

    name: "auth",
    initialState,
    reducers: {

        setUser: (state, {payload}) => {
            state.user = payload
        },

        clearUser: (state) => {
            state.user = null
        }

    }

})

export const {setUser, clearUser} = userSlice.actions;

export default userSlice.reducer;




