import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  //To Do State
  let [toDoList, setTodoList] = useState([])

  //Save To do
  let saveTodoList = (event) => {
    let toDoName = event.target.toname.value
    if (toDoList.includes(toDoName)) {
      alert('This To Do List Already Exist')
    } else {
      let finalTodoList = [...toDoList, toDoName]
      setTodoList(finalTodoList)
      console.log(finalTodoList)
    }

    event.preventDefault()
  }

  //Show to do
  let showTodo = toDoList.map((value, index) => {
    return (
      <ToDolistItems value={value} key={index} indexNumber={index}
        todoList={toDoList} setTodoList={setTodoList} />
    )
  })

  return (
    <div className="App">
      {/* Add To Do */}
      <h1>To do list</h1>
      <form onSubmit={saveTodoList}>
        <input type='text' placeholder='Enter to do' name='toname' />
        <button>Save</button>
      </form>

      {/* Show To Do */}
      <div className='outerDiv'>
        <ul>
          {showTodo}
        </ul>
      </div>

    </div>
  );
}

function ToDolistItems({ value, indexNumber, todoList, setTodoList }) {
  //Line on content
  let [status,setStatus] = useState(false)

  let deleteRow = () => {
    let finalData = todoList.filter((v,i) => i != indexNumber)
    setTodoList(finalData)
  }

  

  return (
    <li className={(status) ? 'completetodo' : ''} onClick={() => setStatus(!status)}>{value} <span onClick={deleteRow}>&times;</span></li>
  )
}
export default App;
