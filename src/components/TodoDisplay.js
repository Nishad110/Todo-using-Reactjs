import { Fragment, useState } from 'react'
import { FaTrashAlt,FaCheckSquare } from 'react-icons/fa';
import './TodoDisplay.css'


function TodoDisplay(props){
    //const [todoList,setTodoList]=useState([])
    const newTodo=props.add
    
    console.log('todo',newTodo )
    
    
    //console.log('todo',newTodo )

return(
    <Fragment>
        <div className="todo-container">
        {
            (newTodo.map(item=>
                <div className="todo-item" key={item.id}><span className="todo-text">{item.value}</span>&nbsp;<FaTrashAlt onClick={()=>props.remove(item)} className="todo-delete"/>&nbsp;<FaCheckSquare className="todo-complete" onClick={()=>props.completed(item)}/></div>))
        }
        </div>
    </Fragment>
)
}

export default TodoDisplay