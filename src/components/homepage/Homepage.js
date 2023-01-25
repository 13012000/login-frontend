import React from 'react'
import '../homepage/homepage.css';
import { useNavigate } from 'react-router-dom';

const Homepage = ({setLoginUser}) => {

  const navigate = useNavigate();

  return (
    <>
    <div className='homepage'>
        <h1>Hello User</h1>
    
    <button className='button' onClick={() => navigate('/login')}>Logout</button>
    </div>
    </>
  )
}

export default Homepage;