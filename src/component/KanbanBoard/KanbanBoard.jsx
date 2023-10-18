import React, { useEffect, useRef } from 'react'
import './KanbanBoard.css'
import { useSelector, useDispatch } from 'react-redux'
import useIsOverflowing from '../../hooks/useIsOverflowing'
import { changeDisplayData} from '../../features/kanban/displaySlice'
import TicketContainer from '../TicketContainer/TicketContainer'

const KanbanBoard = () => {

    const mainRef = useRef();

    const dispatch = useDispatch();
    const { isOverflowingX } = useIsOverflowing(mainRef);
    const grouping = useSelector(state => state.display.grouping);
    const data = useSelector(state => state[grouping].tickets);
    const headers = useSelector(state => state[grouping].headers);
    const displayData = useSelector(state => state.display.displayData);
    const displayHeaders = useSelector(state => state.display.displayHeaders);

    useEffect(() => {
        dispatch(changeDisplayData({ displayHeaders: headers, displayData: data }));
    }, [data, grouping, headers, dispatch])

    return (
        <div
            ref={mainRef}
            className='main-container'
            style={{
                overflow: isOverflowingX ? 'auto' : 'hidden'
            }}
        >
            <>
                {
                    displayData &&
                    Object.keys(displayData).map((key, index) => {
                        return <TicketContainer
                            titleKey={key}
                            grouping={grouping}
                            key={index}
                            lists={displayData[key]}
                            title={displayHeaders[key].name}
                        />
                    })
                }
            </>
        </div>
    )
}

export default KanbanBoard