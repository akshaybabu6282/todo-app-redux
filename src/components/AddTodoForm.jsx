import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../Redux/todoSlice';

function AddTodoForm() {
    const [value, setValue] = useState('');

    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();
        if (value.trim() === "") return; // Prevent adding empty todos
        dispatch(addTodo({
            title: value,
        }))
        setValue(''); // Clear the input field after submission
    };

    return (
        <>
            <form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
                <label className='sr-only mb-2'>Todos :</label>
                <input type="text" className='form-control mb-2 mr-sm-2 mb-3 mt-2' placeholder='Add todo...' value={value} onChange={(event) => setValue(event.target.value)} />
                <button type='submit' className='btn btn-outline-primary mb-2 ps-5 pe-5'>ADD</button>
            </form>
        </>
    )
}

export default AddTodoForm