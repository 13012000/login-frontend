import React, { useState } from "react";
import './index.css';
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Homepage from "./components/homepage/Homepage";
import { Routes, Route} from 'react-router-dom';

function App() {

  const [user, setLoginUser] =useState({});

  return (
    <>
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Homepage setLoginUser={setLoginUser}/>}/>
        {/* {
          user && user._id ?  <Route exact path="/" element={<Homepage setLoginUser={setLoginUser}/>}/> : <Route path="/login" element={<Login setLoginUser={setLoginUser}/>}/>
        }          */}
          <Route path="/login" element={<Login setLoginUser={setLoginUser}/>}/>
          <Route path="/register" element={<Register/>}/>
      </Routes>
      </div>
      </>
  );
}

export default App;
