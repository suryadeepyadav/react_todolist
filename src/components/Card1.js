import React from 'react';
import './mycss.css';
import{useEffect} from 'react';
import {v4 as uuidV4} from "uuid";
import pic from './delete.png';
import pic2 from './edit.png';
// import pic1 from './delete.png';

const Card1 = ({input,setInput , todos , setTodos, editTodo, setEditTodo }) => {

    const updateTodo=(title,id,completed)=>{
        const newTodo=todos.map((todo)=>
            todo.id === id ?{title,id,completed}:todo
        )
        setTodos(newTodo);
        setEditTodo("");
    }

    useEffect(()=>{
        if(editTodo){
            setInput(editTodo.title);
        }
        else{
            setInput("")
        }
    },[setInput,editTodo])
    
    const onInputChange=(event)=>{
        setInput(event.target.value);
    };

    const onFormSubmit=(event)=>{
        event.preventDefault();
        if(!editTodo){
            setTodos([...todos,{id:uuidV4(),title:input,completed:false}]);
        setInput("");
        }else{
            updateTodo(input,editTodo.id,editTodo.completed)
        }
        
    };


  return (
    <form onSubmit={onFormSubmit} autocomplete="off" >
    <div className="container">
      <h1>Todo-list</h1>
      <div className='inputbox'>
        
        <input type="text" placeholder='Enter todo' value={input} required onChange={onInputChange} />
        <button>Add</button>
      </div>
    </div>
    </form>
  )
}

export default Card1

 export const Card2 = ({todos,setTodos , setEditTodo}) => {

    const handleEdit=({id})=>{
        const findTodo=todos.find((todo)=>todo.id===id);
        setEditTodo(findTodo);

    }
    
    const handleDelete=({id})=>{
        setTodos(todos.filter((todo)=>todo.id !==id))
    };
    return (
      <div className='container3'>
          <h1>
             My all  Todos-list
          </h1>
          <div className='inputbox'>
          {todos.map((todo)=>(
        <li className="list-item" key={todo.id}>
            <input type="text" value={todo.title} className="list" onChange={(event)=>event.preventDefault()} />
            
                <button onClick={()=>handleEdit(todo)}>
                    <img src={pic2} alt="" height="15px" width="15px" />
                </button>
            
                <button onClick={()=>handleDelete(todo)}>
                  <img src={pic} alt="" height="15px" width="15px" />
                </button>
        

        </li>
      )

      )}
          </div>
        
      </div>
    )
  }
