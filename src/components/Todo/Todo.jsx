import React, { useState } from 'react'
import styles from "./Todo.css";
import { useDispatch } from "react-redux"
import { editTodo, deleteTodo } from '../../Redux/actions/todoActions'

export default function Todo({ data }) {

    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    }

    const handleChange = (data, type, id) => {
        dispatch(editTodo(data, type, id));
    }

    const closePopup = (event) => {
        if (event.target.className === 'popUp') {
            setIsOpen(false)
        }
    }

    return (
        <>
            <div
                style={{ backgroundColor: data.background.color, color: data.background.textColor }}
                className='note_block'
                onClick={() => setIsOpen(true)}>

                <h3> {data.title} </h3>
                <p className='todo_description'> {data.description} </p>
                <svg onClick={() => handleDelete(data.id)} className={`bin ${data.background.textColor === '#fff' && 'text_white'}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13z"></path><path d="M9 8h2v9H9zm4 0h2v9h-2z"></path></svg>
            </div>
            {
                isOpen && (
                    <div className='popUp' onClick={(e) => closePopup(e)}>
                        <div className="container-popUp">
                            <input
                                onChange={(e) => handleChange(e.target.value, e.target.name, data.id)}
                                type="text"
                                placeholder='Title'
                                name="title"
                                value={data.title} />
                            <br />
                            <textarea
                                onChange={(e) => handleChange(e.target.value, e.target.name, data.id)}
                                name="description"
                                cols="30"
                                rows="10"
                                value={data.description}></textarea>
                        </div>
                    </div>
                )
            }
        </>
    )
}
