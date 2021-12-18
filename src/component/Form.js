import React , {useState} from 'react'
import logo from '../img/pinterest_board_photo.png'
import { Link } from 'react-router-dom'
import style from './style'
import axios from 'axios'

export default function Form() {
    const [password , setPassword] = useState('')
    const [ml , setMl] = useState('')
    const [url , setUrl] = useState('broker.hivemq.com')
    const [delay , setDelay] = useState(false)
    const [status , setStatus] = useState('None')
    return (
        <div style={style.body}>
            <img src={logo} style={style.imgStyle}/>
            <h1 style={style.titleText}>You can Feed your pet's Here</h1>
            <input type='text' style={style.input} placeholder="password" onChange={e => setPassword(e.target.value)}/> <br/>
            <input type='text' style={style.input} placeholder="url" onChange={e => setUrl(e.target.value)} value={url}/> <br/>
            <input type='text' style={style.input} placeholder="ปริมาณ" onChange={e => setMl(e.target.value)} /> <label>กรัม (g) </label><br/> <br/>
            <button style={style.button} disabled={delay} onClick={()=>{
                setDelay(true)
                setStatus('Wait......')
                const data = {
                    "ml"  : ml , 
                    "url": "https://" + url ,
                    "control":"feed",
                    "password" : password ,
                    "topic" : "/feed/board/pass/"
                }
                console.log(data)
                axios.post('https://apiexpressbyme.herokuapp.com/feed/api/feed',data)
                .then(res=> {
                    console.log(res);
                    setStatus(res.data.status)
                    setDelay(false)
                }).catch((e)=>{
                    setStatus('Cant use Api')
                    setDelay(false)
                })

            }}>Feed </button>   <br/>
            <Link to='/'>
                <button style={style.button} >Back </button>
            </Link>
            <h2 >Status : {status}</h2>
        </div>
    )
}
