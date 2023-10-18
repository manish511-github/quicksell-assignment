import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    headers: {},
    tickets: {},
}

export const prioritySlice = createSlice({
    name: 'Priority',
    initialState,
    reducers: {
        addPriorityTickets: (state, action) => {
            const { tickets , headers} = action.payload;
            state.tickets = tickets;
            state.headers = headers;
        }
    }
})

export const { addPriorityTickets } = prioritySlice.actions
export default prioritySlice.reducer