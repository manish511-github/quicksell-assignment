import React, { forwardRef } from 'react'
import './DropdownButton.css'
import { VscSettings } from "react-icons/vsc";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";


const DropdownButton = (props, ref) => {

    const { title, buttonTitleStyle, open, startIcon = true, ...rest } = props

    return (
        <button ref={ref} {...rest} className='dropdown-button-container'>
            {startIcon && <VscSettings style={{ color: "#7f7f7f" }} />}
            <h1 style={buttonTitleStyle} className='dropdown-button-container-title'>{title}</h1>
            {!open ? <BsChevronDown style={{ color: "#7f7f7f" }} /> : <BsChevronUp style={{ color: "#7f7f7f" }} />}
        </button>
    )
}

export default forwardRef(DropdownButton)