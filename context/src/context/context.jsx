import React,{createContext, useState} from 'react'

export const todoContext = createContext({currentTodo: [], 
    setCurrentTodo:()=>{},
})

export const TodoProvider =({ children }) =>{
    const [currentTodo, setCurrentTodo]= useState([])

    return (
        <>
        <todoContext.Provider value ={{currentTodo, setCurrentTodo}}>
            {children}
        </todoContext.Provider>
        </>
    )
}