import React, { useState } from 'react';
import axios from "axios";
import '../register/register.css';
import {useNavigate} from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();

    const[user,setUser] = useState({
        name:"",
        email:"",
        password:"",
        repassword:""
    })

    const handleChange = e =>{
        const {name,value} = e.target;
        setUser({
            ...user,
            [name]:value
        })
    }

    const register = () =>{
        const {name, email, password, repassword} = user
        if(name && email && password && password === repassword){
            axios.post("http://localhost:9002/register", user)
            .then( res => {
                alert(res.data.message)
                navigate('/login')
            })
        } else {
            alert("Fill all the details carefully")
        }
       
    }

  return (
    <div className='container'>
        <h1>Register</h1>
        <input type="text" name='name' value={user.name} placeholder="Your Name" onChange={handleChange}/>
        <input type="email" name='email' value={user.email} placeholder='Enter your Email' onChange={handleChange}/>
        <input type="password" name='password' value={user.password} placeholder='Enter your Password' onChange={handleChange} />
        <input type="password" name='repassword' value={user.repassword} placeholder='Re-enter your Email' onChange={handleChange}/>
    
        <button className='button1' onClick={register}>Register</button>
        <div>or</div>
        <button className='button1' onClick={() => navigate('/login')}>Login</button>
    </div>
  )
}

export default Register;