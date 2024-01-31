import React, { useState } from 'react'
import "./App.css"
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  //to change the buttons to go/ edit and also used during editing
  const [editId, setEditId] = useState(0);

  //called twice once when a new record is being inserted and other when a record is being edited
  const handleSubmit = (e) => {
    e.preventDefault();
    //when editing
    if(editId){
      // find if the edit key id matches with existing key id. If it matches it would change only the respective record 
      const editTodo = todos.find((i) => i.id === editId);
      const updatedTodos = todos.map((t)=>t.id === editTodo.id ? (
        t = {id:t.id, todo}):{id:t.id, todo:t.todo});
      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
      return;
    }
    if(todo !== ''){
      //id value is necessary as it is how react going to identify 
      console.log("In submit");
      setTodos([{id:`${todo}-${Date.now()}` , todo}, ...todos]);
      setTodo("");
    }
  }

  const handleDelete = (id) => {
    const deleteTodo = todos.filter((to)=> to.id !== id);
    setTodos([...deleteTodo]);
  }

  const handleEdit = (id) => {
    const editTodo = todos.find((i)=> i.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  }

  return (
    <div className='App'>
      <div className='container'>
        <h2>ToDo List</h2>
        <TodoForm 
        handleSubmit={handleSubmit}
        todo = {todo}
        editId ={editId}
        setTodo = {setTodo}
        />
       <TodoList
       handleDelete ={handleDelete}
       handleEdit = {handleEdit}
       todos ={todos}
       />
      </div>
    </div>
  )
}

export default App
