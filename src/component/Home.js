import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/pinterest_board_photo.png'
import style  from './style'
export default function Home() {
    return (
        <div style={style.body}>
            <img src={logo} style={style.imgStyle}/>
            <h1 style={style.titleText}>Feed Online Here</h1>
            <Link to="/form">
                <button style={style.button} > Go To Feed Page </button>
            </Link> <br/>
             <Link to="/check">
                <button style={style.button} >You Can Check Server from Here </button>
            </Link>


        </div>
    )
}

 