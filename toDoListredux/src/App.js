import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddTodoAction, RemoveTodoAction } from './actions/TodoActions';
import './App.css';

function App() {

  const [todo, setTodo] = useState()

  const dispatch = useDispatch()
  const todos = useSelector((state) => state.Todo.todos)

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(AddTodoAction(todo))

  }

  return (
    <div className="App">
      <header className='App-header'>
        <h2>TODO List App in Redux</h2>
        <form onSubmit={handleSubmit}>
          <input placeholder='Enter a Task'
            style={{
              width: 350,
              padding: 10,
              borderRadius: 20,
              border: "none",
              fontSize: 20,
            }}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit"
            style={{
              padding: 12,
              borderRadius: 25,
              fontSize: 15,
              marginLeft: 20
            }}
          >Go</button>
        </form>
        <ul className='allTodos'>
          {todos && todos.map(t => (
            <li key={t.id} className='singleTodo'>
              <span className='todoText'>{t.id}</span>
              <button className='button' onClick={() => dispatch(RemoveTodoAction(t))}>Delete</button>
            </li>
          ))}

        </ul>
      </header>

    </div >
  );
}

export default App;
