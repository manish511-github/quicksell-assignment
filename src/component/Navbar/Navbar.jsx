import React, { useState, memo } from 'react'
import Dropdown from '../Dropdown/Dropdown'
import DropdownTitle from '../DropdownTitle/DropdownTitle'
import './Navbar.css'
import { useSelector } from 'react-redux'
import { PRIORITY, TITLE, ORDERING, GROUPING, STATUS, USER} from '../../constants/constants'
const Navbar = () => {
    const grouping = useSelector(state => state.display.grouping);
    const ordering = useSelector(state => state.display.ordering);
    const dropDownItems = [
        {
            title: GROUPING,
            item: ordering === PRIORITY ? [STATUS, USER] : [STATUS, USER, PRIORITY]
        },
        {
            title: ORDERING,
            item: grouping === PRIORITY ? [TITLE] :  [TITLE, PRIORITY]
        },
    ]

    const [selected, setSelected] = useState({
        "Grouping": grouping,
        "Ordering": ordering
    });

    const [open, setIsOpen] = useState(false);

    return (
        <div className='navbar-container'>
            <Dropdown menuStyle={{
                boxShadow: "0px 0px 30px 0px rgba(166,166,166,0.2)"
            }}
                title={"Display"}
                open={open}
                setIsOpen={setIsOpen}
            >

                {
                    dropDownItems.map((items, index) => {
                        return (
                            <DropdownTitle key={index} items={items.item} selected={selected} setSelected={setSelected} title={items.title} />
                        )
                    })
                }
            </Dropdown>
        </div>
    )
}

export default memo(Navbar);