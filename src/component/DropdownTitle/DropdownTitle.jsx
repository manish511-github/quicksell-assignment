import React, { useState } from 'react'
import Dropdown from '../Dropdown/Dropdown'
import './DropdownTitle.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeGrouping, changeOrdering, sortDataByPriority, sortDataByTitle } from '../../features/kanban/displaySlice'
import { PRIORITY, TITLE, ORDERING, GROUPING } from '../../constants/constants'

const DropdownTitle = (props) => {

    const dispatch = useDispatch();

    const { title, selected, setSelected, items } = props;
    const [open, setIsOpen] = useState(false);

    const item = useSelector(state => state.display[title.toLowerCase()])

    const handleSelect = (item) => {
        if (title === GROUPING) {
            dispatch(changeGrouping({ grouping: item }))
        }
        else if (title === ORDERING) {
            if (item === PRIORITY) {
                dispatch(sortDataByPriority());
            }
            else if (item === TITLE) {
                dispatch(sortDataByTitle())
            }

            dispatch(changeOrdering({ ordering: item }))
        }
        setSelected({ ...selected, [title]: item });
        setIsOpen(!open);
    }

    return (
        <div className='dropdown-title-container'>
            <h1 className='dropdown-title'>{title}</h1>
            <Dropdown menuStyle={{
                boxShadow: "2px 2px 21px 0px rgba(166,166,166,0.3)"
            }}
                open={open}
                setIsOpen={setIsOpen}
                onChange={() => { }}
                startIcon={false}
                buttonStyle={{ width: "80px" }}
                title={item}
            >
                {
                    items.map((item, index) => {
                        return (
                            <h1 key={index} className={selected[title] === item ? 'dropdown-title-subtitle-selected' : 'dropdown-title-subtitle'} onClick={() => { handleSelect(item) }}>{item}</h1>
                        )
                    })
                }
            </Dropdown>
        </div>
    )
}

export default DropdownTitle