import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../Redux/action';

function Addtask() {
    const [text,setText]= useState('')
    const dispatch= useDispatch()
    
        return (
            <div>
                <input    value={text}   onChange={(e)=>setText(e.target.value)}    ></input>
                <button    onClick={()=>{dispatch(addTask({id:Math.random(),   text:text ,  done:false    })); setText("")  }}     >Add</button>
            </div>
        )
    }


export default Addtask