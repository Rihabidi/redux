import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask } from '../Redux/action'
import EditTask from './EditTask'

function ListTask({task}) {
    const dispatch= useDispatch()
  return (
    <div>
            <ul>
                <li  >{task.text}</li>
                <button  onClick={()=> dispatch(deleteTask(task.id) )  }  >delete</button>
                <button   onClick={()=>dispatch(deleteTask(task.id))}   >   {task.done ? "undone"  : "done" }   </button>
                 <EditTask  task={task} / >
            </ul> 
    </div>
  )
}

export default ListTask;