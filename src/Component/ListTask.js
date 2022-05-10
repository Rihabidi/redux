import { useState } from "react"
import { useSelector } from "react-redux"
import Task from "./Task"

const ListTask =()=>{


    const tasks= useSelector(state=> state.tasks)

    const [filterDone, setFilterDone] =useState(false)
    const [filter, setFilter] =useState(false)
    return (
        <div>
            <button  onClick={()=> setFilter(false)}   >all</button>
            <button    onClick={()=>{   setFilterDone(true);  setFilter(true)  }}   >done</button>
            <button    onClick={()=>{setFilterDone(false);  setFilter(true) }}    >undone</button>
            {
            filterDone  && filter ? tasks.filter(el=>el.done).map( task  =>    <Task   task={task}   key={task.id}  />  ):
            ! filterDone  && filter ? tasks.filter(el=>!el.done).map( task  =>    <Task   task={task}   key={task.id}  /> ):
            
            ! filter ?  tasks.map( task  =>    <Task   task={task}   key={task.id}  />  )
        
        : null}
        </div>
    )
}

export default ListTask;
