import { createSlice } from "@reduxjs/toolkit";
import Todo from '../../assets/todo.svg';
import InProgress from '../../assets/in_progress.svg'
import Done from '../../assets/done.svg'

import Low from '../../assets/low1.svg'
import Medium from '../../assets/medium1.svg'
import Urgent from '../../assets/urgent.svg'
import NoPriority from '../../assets/no_priority.svg'
import High from '../../assets/high1.svg'

import DP1 from '../../assets/dp/1.jpg'
import DP2 from '../../assets/dp/2.jpg'
import DP3 from '../../assets/dp/3.jpg'
import DP4 from '../../assets/dp/4.jpg'
import DP5 from '../../assets/dp/5.jpg'

const initialState = {
    "Status": {
        "Todo": Todo,
        "In progress": InProgress,
        "Backlog": Done
    },
    "Priority": {
        "High": High,
        "Low": Low,
        "Medium": Medium,
        "Urgent": Urgent,
        "No Priority": NoPriority
    },
    "User": {
        "Anoop sharma": DP1,
        "Yogesh": DP2,
        "Suresh": DP3,
        "Shankar Kumar": DP4,
        "Ramesh": DP5
    }
}

export const imageSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {

    }
})

export default imageSlice.reducer