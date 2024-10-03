import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, toggleComplete } from '../Redux/todoSlice';

function TodoItem({ id, title, completed }) {

    const dispatch = useDispatch();

    const handleCompleteClick = () => {
        dispatch(toggleComplete({ id: id, completed: !completed }))
    }

    const handleDeleteClick = () => {
        dispatch(deleteTodo({ id: id }))
    }
    return (
        <>
            <li className={`list-group-item ${completed ? 'list-group-item-success' : ''}`}>
                <div className='d-flex justify-content-between'>
                    <span className='d-flex align-items-center'>
                        <input type="checkbox" className='mr-3 me-3' checked={completed} onChange={handleCompleteClick} />
                         {title}
                    </span>
                    <button onClick={handleDeleteClick} className='btn btn-outline-danger mt-3'>Delete</button>
                </div>
            </li>
        </>
    )
}

export default TodoItem