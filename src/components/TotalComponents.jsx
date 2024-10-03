import React from 'react'
import { useSelector } from 'react-redux'

function TotalComponents() {

    const completedTodos = useSelector((state) => state.todos.filter((todo) => todo.completed === true));

    return (
        <>
            <h4 className='mt-3' style={{paddingBottom:"400px"}}>Total Complete Item: {completedTodos.length}</h4>
        </>
    )
}

export default TotalComponents