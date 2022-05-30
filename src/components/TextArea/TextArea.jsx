import React, { useState } from 'react'
import Styles from "./Textarea.css"
import { useDispatch } from 'react-redux'
import { addTodo } from '../../Redux/actions/todoActions'

const colors = [
    {
        color: '#fff',
        textColor: '#000'
    }, {
        color: '#6A67CE',
        textColor: 'black'
    }, {
        color: '#947EC3',
        textColor: '#000'
    }, {
        color: '#B689C0',
        textColor: '#fff'
    }, {
        color: '#15133C',
        textColor: '#fff'
    },{
        color: '#6D8B74',
        textColor: '#fff'
    },{
        color: '#F8CB2E',
        textColor: '#fff'
    },{
        color: '#FFC4DD',
        textColor: '#000'
    },{
        color: '#AC7D88',
        textColor: '#000'
    },{
        color: '#06113C',
        textColor: '#fff'
    }

]

export default function TextArea() {
    const defaultTextData = { title: '', textarea: '' }

    const [textData, setTextData] = useState(defaultTextData)
    const [isHiddenTitle, setIsHiddenTitle] = useState(true)
    const [colorChangePopup, setColorChangePopup] = useState(false);
    const [choosenColor,setChoosenColor] = useState(colors[0]);
    const dispatch = useDispatch()


    const handleChange = (event) => {
        setTextData({ ...textData, [event.target.name]: event.target.value })
    }

    const addBtn = (e) => {
        e.preventDefault();
        if(textData.textarea.length === 0){
            alert("the fields are empty");
            return;
        }

        dispatch(addTodo(textData.title, textData.textarea, choosenColor))
        setTextData(defaultTextData)
    }

    const closeBtn = (e) => {
        e.preventDefault();
        setIsHiddenTitle(true);
        setTextData(defaultTextData)
    }
    

    return (
        <div className='container'>
            <form style={{backgroundColor: choosenColor.color, color: choosenColor.textColor}}>
                <input 
                 className='title_input'
                 value={textData.title} 
                 type="text"
                 name="title"
                 placeholder='Title' 
                 style={{ display: isHiddenTitle ? 'none' : 'block', color: choosenColor.textColor }}
                 onChange={handleChange} />

                <textarea
                 className='textarea_input'
                 value={textData.textarea}
                 name="textarea"
                 id="textarea"
                 onFocus={() => setIsHiddenTitle(false)}
                 placeholder='Take a note...'
                 onChange={handleChange}
                 style={{color: choosenColor.textColor }}></textarea>

                <div className="buttons" style={{ display: isHiddenTitle ? 'none' : 'block' }} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={choosenColor.textColor} onClick={() => setColorChangePopup(!colorChangePopup)}>
                        <path d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67A2.5 2.5 0 0 1 12 22zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5a.54.54 0 0 0-.14-.35c-.41-.46-.63-1.05-.63-1.65a2.5 2.5 0 0 1 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7z"/><circle cx="6.5" cy="11.5" r="1.5"/>
                        <circle cx="9.5" cy="7.5" r="1.5"/><circle cx="14.5" cy="7.5" r="1.5"/><circle cx="17.5" cy="11.5" r="1.5"/>
                    </svg>

                    <button style={{color: choosenColor.textColor }} onClick={(e) => addBtn(e)} id='addBtn'>Add</button>
                    <button style={{color: choosenColor.textColor }} onClick={(e) => closeBtn(e)} id='closeBtn'>Close</button>
                </div>
                {
                    colorChangePopup && (
                        <div className="colorPopup">
                        {
                            colors.map((elem, key) => (
                                <div key={key} onClick={() => setChoosenColor(elem)} className={`color-choice ${elem.color === choosenColor.color && 'color-choice-selected'}`} style={{backgroundColor: elem.color}}></div>
                            ))
                        }
                    </div>
                    )
                }
               
            </form>
        </div>
    )
}
