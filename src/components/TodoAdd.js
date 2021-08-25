import { Fragment, useRef, useState } from 'react'
import './TodoAdd.css'
import TodoDisplay from './TodoDisplay'
import TodoComplete from './TodoComplete'
function TodoAdd(){
//const [todo,setTodo]=useState('')
//const [input,setInput]=useState('')
const todoRef=useRef()
const [todoList,setTodoList]=useState([])
const [todoListComplete,setTodoListComplete]=useState([])

const onTodoAdd=(e)=>{
    e.preventDefault()
    const newTodo={id: Math.random(),
        value : todoRef.current.value}
    if(newTodo.value!==""){
        setTodoList([...todoList,newTodo])
        todoRef.current.value=''
    }
    
}
const onTodoDelete=(todo)=>{
    
    setTodoList(todoList.filter(el=>el!==todo))
}
// const onChangeHandler=(e)=>{
//     e.preventDefault()
//     setInput(e.target.value)
// }
const onTodoComplete=(todo)=>{
    setTodoList(todoList.filter(el=>el!==todo))
    setTodoListComplete([todo])
}
return(
    <Fragment>
        <div>
            <input className="todo-textfield" type="text" placeholder="Enter Todo Here" ref={todoRef}  />
            <button className="todo-button "onClick={onTodoAdd}>Add Todo</button>
        </div>
        <TodoDisplay add={todoList} remove={onTodoDelete} completed={onTodoComplete}/>
        <p align="left">Last Completed Todo</p>
        <TodoComplete add={todoListComplete}/>
    </Fragment>
)
}

export default TodoAdd