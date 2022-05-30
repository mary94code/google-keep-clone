import { combineReducers } from "redux";
import { createStore } from 'redux';
import todoReducer from "./reducers/todoReducer";
const localStorageKey = "redux"

const combined = combineReducers({
    todoReducer
})

const saveToLocalStorage = (state) => {
    localStorage.setItem(localStorageKey, JSON.stringify(state))
}

const loadFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem(localStorageKey)) || {}
}


const store = createStore(combined, loadFromLocalStorage())

store.subscribe(() => saveToLocalStorage(store.getState()))

export {store}
