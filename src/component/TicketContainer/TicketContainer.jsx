import React, { useRef } from 'react'
import TicketContainerNavbar from '../TicketContainerNavbar/TicketContainerNavbar'
import useDynamicMaxHeight from '../../hooks/useDynamicMaxHeight'
import useIsOverflowing from '../../hooks/useIsOverflowing'
import './TicketContainer.css'

import { useSelector } from 'react-redux'
import TicketList from '../TicketList/TicketList'

const TicketContainer = (props) => {

    const { lists, title, grouping, titleKey } = props
    const ticketContainerRef = useRef();
    const { isOverflowingY } = useIsOverflowing(ticketContainerRef);
    const maxHeight = useDynamicMaxHeight(ticketContainerRef);
    const icons = useSelector(state => state.images)
    const priorityHeaders = useSelector(state => state.Priority.headers)
    const userHeaders = useSelector(state => state.User.headers)

    return (
        <div style={{ width: "fit-content" }}>
            <TicketContainerNavbar
                userAvailable={grouping === "User" ? userHeaders[titleKey]?.available : false}
                grouping={grouping}
                imgSrc={icons[grouping][title]}
                title={title}
                count={lists.length}
            />
            <TicketList
                ref={ticketContainerRef}
                maxHeight={maxHeight}
                isOverflowingY={isOverflowingY}
                lists={lists}
                grouping={grouping}
                icons={icons}
                userHeaders={userHeaders}
                priorityHeaders={priorityHeaders}
            />
        </div>
    )
}

export default TicketContainer