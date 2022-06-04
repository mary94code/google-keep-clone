import React from 'react'
import styles from './Header.css'
import { useSelector, useDispatch } from 'react-redux'
import { changeTheme } from '../../Redux/actions/todoActions'

export default function Header() {

    const dispatch = useDispatch()

    const isChangedTheme = useSelector(state => state.todoReducer.isChangedTheme)

    const handleChangeTheme = (e) => {
        e.preventDefault();
        dispatch(changeTheme())
    }

    const handleRefreshPage = () => {
        window.location.reload();
    }

    return (
        <div className='header'>
            <div>
                <img className='logoImg' src="https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png" alt="logo-image" />
                <h2>Keep</h2>
            </div>
            <div>


                <svg className='search_button' focusable="false" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"></path><path d="M0,0h24v24H0V0z" fill="none"></path></svg>
                <input className='searchBox' type="search" placeholder='Search' />
            </div>
            <div>

                <svg className='header_icon refresh_icon' onClick={handleRefreshPage} fill={isChangedTheme === true ? '#fff' : '#000'} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                    <path d="M13 9v2h7V4h-2v2.74C16.53 5.07 14.4 4 12 4c-2.21 0-4.21.9-5.66 2.34S4 9.79 4 12c0 4.42 3.58 8 8 8 2.21 0 4.21-.9 5.66-2.34l-1.42-1.42A5.98 5.98 0 0 1 12 18c-3.31 0-6-2.69-6-6 0-1.65.67-3.15 1.76-4.24A5.98 5.98 0 0 1 12 6a6.01 6.01 0 0 1 5.19 3H13z" />
                </svg>

                <svg className='header_icon light_icon' fill={isChangedTheme === true ? '#fff' : '#000'} onClick={handleChangeTheme} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path></svg>
            </div>
        </div>
    )
}
