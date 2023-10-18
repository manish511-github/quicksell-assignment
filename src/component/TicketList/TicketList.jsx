import React, { forwardRef } from 'react'
import TicketCard from '../TicketCard/TicketCard'

const TicketList = (props, ticketContainerRef) => {
    const { maxHeight, isOverflowingY, lists, grouping, icons, userHeaders, priorityHeaders } = props
    return (
        <div ref={ticketContainerRef} style={{
            maxHeight: maxHeight,
            overflowY: isOverflowingY ? 'auto' : 'hidden'
        }} className='ticket-container-main'>
            {
                lists.length > 0 &&
                lists.map((item, index) => {
                    return (
                        <TicketCard
                            userAvailable={grouping !== "User" ? userHeaders[item.userId]?.available : false}
                            grouping={grouping}
                            userIcon={icons.User[userHeaders[item.userId].name]}
                            statusIcon={icons.Status[item.status]}
                            priorityIcon={icons.Priority[priorityHeaders[item.priority].name]}
                            key={index}
                            title={item.title}
                            id={item.id}
                            tag={item.tag}
                            status={item.status}
                            priority={item.priority} />
                    )
                })
            }

        </div>
    )
}

export default forwardRef(TicketList)