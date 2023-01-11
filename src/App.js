import './App.css';
import { Card2 } from './components/Card1';
import  Card1 from './components/Card1';
import { useState } from 'react';
//import Card2 from './components/Card2';

function App() {
//for keep tack of user input we use usestae hooks 
const [input, setInput] = useState("");
// for keep tack all the todo list item we use usstate hook and asinged it value an empty  array 
const [todos, setTodos] = useState([]);
// make a state for edit todo
const [editTodo, setEditTodo] = useState(null);

  return (
    <div className='container2' >
      <div className='card1'>
      <Card1
      input={input}
      setInput={setInput}
      todos={todos}
      setTodos={setTodos}
      editTodo={editTodo}
      setEditTodo={setEditTodo}
      />
      </div>
      <div className='card2'>
      <Card2 todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}/>
      </div>
      
    </div>
  );
}

export default App;
