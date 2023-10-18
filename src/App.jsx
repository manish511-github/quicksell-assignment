import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import { useDispatch } from 'react-redux'
import { addStatusTickets } from './features/kanban/statusSlice'
import { addPriorityTickets } from './features/kanban/prioritySlice'
import { addUserTickets } from './features/kanban/userSlice'
import { fetchTickets } from './api/fetchTickets'
import KanbanBoard from './component/KanbanBoard/KanbanBoard'
import Loader from './component/Loader/Loader'

function App() {

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);


  const fetchData = async (dispatch) => {
    try {
      const { user, status, priority, statusHeader, userHeader, priorityHeader } = await fetchTickets();
      dispatch(addStatusTickets({ headers: statusHeader, tickets: status }));
      dispatch(addPriorityTickets({ headers: priorityHeader, tickets: priority }));
      dispatch(addUserTickets({ headers: userHeader, tickets: user }));
      setLoading(false);
    }
    catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    fetchData(dispatch);
  }, [dispatch]);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh" }} >
        <Loader />
      </div>
    )
  }



  return (
    <>
      <Navbar />
      <KanbanBoard />
    </ >
  )
}

export default App
