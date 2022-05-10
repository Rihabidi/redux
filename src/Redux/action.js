import { ADD_TASK, CHECK_TASK, DELETE_TASK, EDIT_TASK } from "./type"


export const addTask=(newTask)=>{
    return {
        type:ADD_TASK,
        payload:newTask
    }

};

export const deleteTask=(id)=>{
    return {
        type:DELETE_TASK,
        payload:id
    }
    
};
    
export const editTask=(id,newTask)=>{
    return {
        type:EDIT_TASK,
        payload:{
            id,newTask
            }
    }
        
};
export const checkTask=(id)=>{
    return {
        type:CHECK_TASK,
        payload:id
    }
    
};
    
        