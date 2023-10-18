import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    headers: {},
    tickets: {},
}

export const userSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
         addUserTickets: (state, action) => {
            const {headers, tickets} = action.payload;
            state.headers = headers;
            state.tickets = tickets;
         }
    }
})

export const { addUserTickets } = userSlice.actions;

export default userSlice.reducer;