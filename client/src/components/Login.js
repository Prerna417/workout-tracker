import React, { useState,useContext } from 'react'
import { useRef } from "react";
import {loginCall} from "../apicalls"
import {AuthContext} from "../context/AuthContext";
import {CircularProgress} from "@material-ui/core"
import { Link } from 'react-router-dom';

function Login() {
  const email = useRef();
  const password = useRef();
  const username = useRef();
  const [errorMessage, setErrorMessage] = useState(null);
  const { user, isFetching, error, dispatch} = useContext(AuthContext);


  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      await loginCall(
        {username:username.current.value,password:password.current.value},dispatch);
    }catch(err){
      setErrorMessage(err.response?.data?.message);
    }
    
  };

  return (
    <div className='container mx-auto py-8 flex justify-center'>
     <form onSubmit={handleSubmit} className=' mt-16 flex flex-col items-center bg-slate-300 py-5 w-[300px] '>
           <label htmlFor="username">Enter username:</label>
           <input type="text" id="username" name="username" required ref ={username}></input>
           <br/>
          <label htmlFor="password">Enter password:</label>
          <input type="password" id="password" name="password" required ref={password} minLength = "6"></input>
          <button  className='font-semibold bg-sky-300 text-black px-24 py-2 mt-6 rounded  ' disabled={isFetching}>{isFetching? <CircularProgress size="20px"/>:"Login"}</button>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <a href="" className='text-sm mt-6'>forgot password</a>

          <button className='bg-sky-300 px-4 py-2 rounded mt-6'><Link to="/Register">Create a new account</Link></button>
        </form>
    </div>
  )
}

export default Login
