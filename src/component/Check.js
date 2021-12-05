import React, { useState ,useEffect} from 'react'
import style from './style'
import logo from '../img/pinterest_board_photo.png'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default function Check() {
    const [url, setUrl] = useState('')
    const [status, setStatus] = useState('None')
    const [condition , serCondition] = useState(false)
    const [delay , setDelay]= useState(false)
    //func to check url api
    useEffect(()=>{
        serCondition(true)
    },[])
     
    return (
        <div style={style.body}>
            <img src={logo} style={style.imgStyle} />
            <h1 style={style.titleText, { fontSize: 20 }}>You can check your URL Here</h1>
            <input
                type="text"
                placeholder="broker.in.com"
                style={style.input}
                onChange={e => setUrl(e.target.value)}
            />
            <br /> <br />
            <button
                style={style.button}
                disabled={delay}
                onClick={ () => {
            setDelay(true)
        if (condition){
            axios.post('https://apiexpressbyme.herokuapp.com/feed/api/can', {
            url: `https://${url}`
        }).then((res) => {
            const Data = res.data
            console.log(Data);
            if (Data.CanConnect) {
                setStatus('you "CAN" connect with this url')
            }
            else {
                setStatus('"CANT" connect Because ->>> \n' + Data.Because)
            }
            setDelay(false)

        })
        }
        
    }}
            >Submit</button>
            <br />
            <Link to="/">
                <button
                    style={style.button}
                >Back To Main Page</button>
            </Link>
            <h2>Status : {status}</h2>
        </div>
    )
}
