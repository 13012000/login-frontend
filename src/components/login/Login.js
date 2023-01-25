import React, { useState } from 'react';
import axios from "axios";
import '../login/login.css';
import {useNavigate} from "react-router-dom";

const Login = ( {setLoginUser} ) => {

    const navigate = useNavigate();

    const[loguser,setLoguser] = useState({
        email:"",
        password:""
    });

    const handleInput = e =>{
        const {name,value} = e.target;
        setLoguser((prev) =>{
            return{
                ...prev,
                [name]:value
            }
        })
    }

    const login = () =>{
        axios.post("http://localhost:9002/login", loguser)
        .then( res => {
            alert(res.data.message)
            console.log(res.data.status);
            setLoginUser(res.data.user);
            if(res.data.status){
                navigate("/");
            }
        })
    }

  return (<>
    <div className='container'>
        <h1>Login</h1>
        <input type="email" name='email' value={loguser.email} placeholder='Enter your Email' onChange={handleInput}/>
        <input type="password" name='password' value={loguser.password} placeholder='Enter your Password' onChange={handleInput} />
        <button className='button1' onClick={login}>Login</button>
        <div>or</div>
        <div className='button1' onClick={()=>navigate("/register")}>
            Register
        </div>
    </div>
    </>
  )
}

export default Login;