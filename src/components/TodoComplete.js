import { Fragment, useState } from 'react'
import './TodoComplete.css'
function TodoComplete(props){
    //const [todoList,setTodoList]=useState([])
    const newTodo=props.add
    
    console.log('todo',newTodo )
    
    
    //console.log('todo',newTodo )

return(
    <Fragment>
        <div className="todo-container-complete">
        {
            (newTodo.map(item=>
                <div className="todo-item-complete" key={item.id}><p className="todo-text-complete">{item.value}</p></div>))
        }
        {(newTodo.length!==0)?<p className="note-text">Last completed todo is shown here</p>:<p></p>}
        </div>
       
        
    </Fragment>
)
}

export default TodoComplete