import { createSlice } from "@reduxjs/toolkit";
import { STATUS, TITLE } from "../../constants/constants";

const initialState = {
    grouping: STATUS,
    ordering: TITLE,
    displayData: {},
    displayHeaders: {},
}

export const displaySlice = createSlice({
    name: 'display',
    initialState,
    reducers: {
        changeGrouping: (state, action) => {
            state.grouping = action.payload.grouping;
        },
        changeOrdering: (state, action) => {
            state.ordering = action.payload.ordering;
        },
        changeDisplayData: (state, action) => {
            const { displayData, displayHeaders } = action.payload;

            const newState = {
                ...state,
                displayData: {},
                displayHeaders: displayHeaders,
            };

            if (state.ordering === "Title") {
                Object.keys(displayData).forEach((key) => {
                    newState.displayData[key] = [...displayData[key]]; // Create a new sorted array
                    newState.displayData[key].sort((a, b) => a.title.localeCompare(b.title));
                });
            } else if (state.ordering === "Priority") {
                Object.keys(displayData).forEach((key) => {
                    newState.displayData[key] = [...displayData[key]]; // Create a new sorted array
                    newState.displayData[key].sort((a, b) => b.priority - a.priority);
                });
            }
            return newState;
        },

        sortDataByPriority: (state, action) => {
            Object.keys(state.displayData).map((key) => {
                state.displayData[key].sort((a, b) => b.priority - a.priority);
                return null;
            })
        },
        sortDataByTitle: (state, action) => {
            Object.keys(state.displayData).map((key) => {
                state.displayData[key].sort((a, b) => a.title.localeCompare(b.title));
                return null;
            })
        }
    }
})

export const { changeGrouping, changeOrdering, changeDisplayData, sortDataByPriority, sortDataByTitle } = displaySlice.actions

export default displaySlice.reducer