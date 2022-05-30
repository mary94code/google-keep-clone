import { ADD_TODO, CHANGE_THEME, DELETE_TODO, EDIT_TODO } from "../types/todoTypes"

const initialState = {
    todos: [],
    isChangedTheme: false
}

const todoReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TODO:
            let id = state.todos.length ? state.todos[state.todos.length - 1].id + 1 : 1
            return {
                ...state, todos: [...state.todos, {
                    id,
                    title: action.payload.title,
                    description: action.payload.description,
                    background: action.payload.backgroundColor
                }]
            }

        case CHANGE_THEME:
            return { ...state, isChangedTheme: !state.isChangedTheme }

        case EDIT_TODO:
            let index = state.todos.findIndex(elem => elem.id === action.payload.id)
            let todoCopy = [...state.todos]
            todoCopy[index][action.payload.type] = action.payload.data;
            return {
                ...state, todos: todoCopy
            }

        case DELETE_TODO:
            let new_arr = state.todos.filter(elem => elem.id !== action.payload.id)
            return {
                ...state, todos: new_arr
            }

        default:
            return { ...state }
    }
}

export default todoReducer