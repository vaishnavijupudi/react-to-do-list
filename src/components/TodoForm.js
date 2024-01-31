import React from 'react'

const TodoForm = (props) => {
  return (
    <form className='todoform' onSubmit={props.handleSubmit}>
        <input type ="text" value={props.todo} onChange={(e) =>props.setTodo(e.target.value)}></input>
        <button>{props.editId ? "Edit" : "GO"}</button>
    </form>
  )
}

export default TodoForm
