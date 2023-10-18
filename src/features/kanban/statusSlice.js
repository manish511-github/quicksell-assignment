import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    headers: {},
    tickets: {},
}

export const statusSlice = createSlice({
    name: 'Status',
    initialState,
    reducers: {
        addStatusTickets: (state, action) => {
            const { headers, tickets } = action.payload;
            state.headers = headers;
            state.tickets = tickets;
        }
    }
})

export const { addStatusTickets } = statusSlice.actions

export default statusSlice.reducer