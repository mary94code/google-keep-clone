import { ADD_TODO, DELETE_TODO, EDIT_TODO, CHANGE_THEME } from "../types/todoTypes"

export const changeTheme = () => {
    return {
         type: CHANGE_THEME 
    }
}

export const addTodo = (title,description,backgroundColor) => {
    return{
        type: ADD_TODO,
        payload: {
             title,
             description,
             backgroundColor
        }
    }
}
export const editTodo = (data, type, id) =>{
    return {
       type: EDIT_TODO,
       payload:{
           data,
           type,
           id
       }
    }
}
export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload:{
            id
        }
    }
}