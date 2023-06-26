import TodoForm from './components/TodoForm'
import Search from './components/Search'
import TodoList from './components/TodoList';
import './App.scss';
import './Index.scss';


function App() {


  return (
    <div className='container'>
      <h1>Todo App</h1>
      <TodoForm/>
      <Search/>
      <TodoList/>
    </div>
  )
}

export default App
