import React from 'react'
import Users from '../loginUser/Users'
import {useState} from 'react'
import { useNavigate } from "react-router-dom"
import '../css/Login.css'


const Login = () => {

    const [id,setId]=useState("")

    const [email,setEmail]=useState("")

    const [password,setPassword]=useState("")

    let nav=useNavigate()

    const onClick=()=>{
        let i=0;
        Users.map((user)=>{
            if(user.id===id&&user.email===email&&user.password===password)
            {
                i=1
            }
        })
        if(i)
        {
            nav("/health")
        }
        else{
            alert("wrong credendials")
        }
    }

    const handleID=(e)=>{
        setId(e.target.value)
    }

    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }

    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }

  return (
    <>
       <div className="main">
        <p className="sign" align="center">LOGIN</p>
        <form className="form1">
            <input className="tb" onChange={handleID} type="text" align="center" placeholder="ID"/>
            <input className="tb" onChange={handleEmail} type="text" align="center" placeholder="Email"/>
            <input className="tb" onChange={handlePassword} type="password" align="center" placeholder="Password"/>
            <button className="submit" align="center" onClick={onClick}>Login</button>
         </form>
    </div>
    </>
  )
}

export default Login