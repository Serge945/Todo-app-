import React, {useState , useContext} from 'react'
import { todoContext } from '../context/context';
import { deleteFromLocalStorage, editToLocalStorage, taskCompletedToLocalStorage } from '../localstorage/localstorage';



function TodoItem({id , text, completed, search}) {
  const {currentTodo , setCurrentTodo}= useContext(todoContext);
  const [checked , setChecked]= useState(completed)
  const[outputValue , setOutputValue]=  useState(text);
  const [editTodo, setEditTodo]= useState(false)

  const taskCompletedHandler=(e)=>{
    setChecked(!checked);

    setCurrentTodo(currentTodo.map((todo)=>{
      if(todo.id === id ){
        todo.completed = !todo.completed;
        taskCompletedToLocalStorage(id)
      }
      return todo;
    }))
  }

  const editHandler =(e)=>{
   setEditTodo(!editTodo);
   if(editTodo){
    setCurrentTodo(currentTodo.map((todo)=>{
      if(todo.id === id){
        todo.text === outputValue;
        editToLocalStorage(outputValue,id);
      }
      return todo;
    }))
   }
  }
  const deleteHandler=()=>{
    const deletedTask= currentTodo.filter((todo)=>todo.id !== id)
    setCurrentTodo(deletedTask)
    deleteFromLocalStorage(deletedTask)
  }
  return  (
    <div className ={`todo-item ${search ? "hide" : "show"}`}>
        <input 
        type ="checkbox"
        className ='checkbox'
        checked={checked}
        onChange={taskCompletedHandler}
        />
        <input type ='text' 
        className ={`todo-text ${checked ? "completed" : ""}`}
        value={outputValue}
        onChange ={(e)=> setOutputValue(e.target.value)}
         disabled = {editTodo ? false : true }/>
        {!editTodo ? 
        (<button className='edit-item' 
        onClick={editHandler}>
          Edit
          </button>):
        (<button className='edit-item' 
        onClick={editHandler}>
          done
          </button>)}
          <button className ='delete-button' onClick={deleteHandler}>delete</button>
    </div>
  )
}

export default TodoItem
