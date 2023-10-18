import React from 'react'
import './TicketContainerNavbar.css'
import { BsThreeDots } from "react-icons/bs";
import DisplayPicture from '../DisplayPicture/DisplayPicture';


const TicketContainerNavbar = (props) => {
    const { title, count, imgSrc, grouping, userAvailable } = props;
    return (
        <div className='ticket-container-navbar-container'>
            <div className='ticket-container-navbar'>
                {grouping !== "User" ?
                    <img loading='lazy' style={{ width: '20px', height: '20px' }} src={imgSrc} alt="title" />
                    :
                    <DisplayPicture userAvailable={userAvailable} imgSrc={imgSrc}/>
                }
                <h1 className='ticket-container-navbar-title' >{title}</h1>
                <h1 className='ticket-container-navbar-count'>{count}</h1>
            </div>
            <div className='ticket-container-navbar'>
                <h1 className='ticket-container-navbar-plus'>+</h1>
                <BsThreeDots />
            </div>
        </div>
    )
}

export default TicketContainerNavbar