import React, { useState } from 'react'
import './TicketCard.css'
import DisplayPicture from '../DisplayPicture/DisplayPicture'

const TicketCard = (props) => {
  const { title, id, tag, statusIcon, grouping, priorityIcon, userIcon, userAvailable } = props

  const [ , setDragging] = useState(false);

  const handleDragStart = () => {
    setDragging(true);
  }

  const handleDragEnd = () => {
    setDragging(false);
  }


  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className="ticket-container"
    >
      <div className='ticket-id-container'>
        <h1 className='ticket-id'>{id}</h1>
        {grouping !== "User" ? <DisplayPicture userAvailable={userAvailable} imgSrc={userIcon} /> : null}
        {/* <div className='image-dp' /> */}
      </div>
      <div className='title-container'>
        {(grouping === "User" | grouping === "Priority") ? <img loading='lazy' style={{ width: "15px", height: "15px" }} src={statusIcon} alt="dp" /> : null}
        <p className='title' >{title}</p>
      </div>
      <div className='tag-container'>
        {(grouping === "User" | grouping === "Status") ? <img loading='lazy' style={{ width: "15px", height: "15px" }} src={priorityIcon} alt="dp" /> : null}
        {
          tag.length >= 0 &&
          tag.map((item, index) => {
            return (
              <div key={index} className='tag-sub-container'>
                <div className='tag-title-icon' />
                <h1 key={index} className='tag-title'>{item}</h1>
              </div>
            )
          })

        }
      </div>
    </div>
  )
}

export default TicketCard