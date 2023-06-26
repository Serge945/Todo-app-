import React, { useContext,useEffect } from 'react';
import { todoContext } from '../context/context';
import TodoItem from './TodoItem';
import { viewFromLocalStorage } from '../localstorage/localstorage';

function TodoList() {
  const { currentTodo, setCurrentTodo} = useContext(todoContext);

  useEffect(()=>{
     const tasks= viewFromLocalStorage();
     setCurrentTodo(tasks)
  },[])

  return (
    <div className="todo-list">
      {currentTodo &&
        currentTodo.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
    </div>
  );
}

export default TodoList;
