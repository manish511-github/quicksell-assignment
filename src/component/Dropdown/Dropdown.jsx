import React, { useRef, useEffect } from 'react'
import DropdownButton from '../DropdownButton/DropDownButton'
import './Dropdown.css'

const Dropdown = (props) => {

    const menuRef = useRef();
    const buttonRef = useRef();
    const { children, title, buttonStyle, buttonTitleStyle, menuStyle, open, setIsOpen, ...rest } = props;

    function isAboveButton(event) {
        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            const isInsideButton =
                event.clientX >= rect.left &&
                event.clientX <= rect.right &&
                event.clientY >= rect.top &&
                event.clientY <= rect.bottom;
            console.log(isInsideButton)
            return isInsideButton
        }
    }


    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                if (!isAboveButton(event)) {
                    setIsOpen(prev => {
                        return !prev
                    });
                }
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef, setIsOpen]);

    const handleOpen = () => {
        setIsOpen(prev => {
            return !prev;
        })
    }

    return (
        <div className='dropdown-container'>
            <DropdownButton open={open} {...rest} ref={buttonRef} buttonTitleStyle={buttonTitleStyle} style={buttonStyle} title={title} onClick={() => { handleOpen() }} />
            {
                open &&
                <div ref={menuRef} style={menuStyle} className='dropdown-menu-container'>
                    {children}
                </div>
            }
        </div>
    )
}

export default Dropdown