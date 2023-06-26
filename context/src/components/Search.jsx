import React, { useContext, useState } from 'react'
import  {todoContext} from '../context/context'

function Search() {

  const {currentTodo , setCurrentTodo} = useContext(todoContext)

  const [searchInput , setSearchInput]= useState('');

  const searchHandler = (e) =>{
     let term  = e.target.value;
     setSearchInput(term)
     term = term.toLowerCase();
     setCurrentTodo(currentTodo((todo) =>{
      if(todo.text.search(term)< 0){
        todo.search = true;
      }else {
        todo.search = false;
      }
      return todo;
     }))
  }

  return (
    <>
   {currentTodo && currentTodo.length > 0 && <input 
   type='search' 
   className='search'
   placeholder='Search'
   value={searchInput}
   onChange={searchHandler}
   />}
   </>
  )
}

export default Search
