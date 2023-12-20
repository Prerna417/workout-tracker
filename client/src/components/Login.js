import React, { useContext } from 'react'
import { useRef } from "react";
import {loginCall} from "../apicalls"
import {AuthContext} from "../context/AuthContext";
import {CircularProgress} from "@material-ui/core"

function Login() {
  const email = useRef();
  const password = useRef();
  const username = useRef();
  const { user, isFetching, error, dispatch} = useContext(AuthContext);


  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      await loginCall(
        {username:username.current.value,password:password.current.value},dispatch);
    }catch(err){
      console.log(err);
    }
    
  };
 
  console.log(user);
  return (
    <div className='container mx-auto py-8 flex justify-center'>
     <form onSubmit={handleSubmit} className=' mt-16 flex flex-col items-center bg-slate-300 py-5 w-[300px] '>
          {/* <label for="email">Enter email:</label>
          <input type="email" id="email" name="email" ref={email}></input>
          <br /> */}
          <label for="password">Enter password:</label>
          <input type="password" id="password" name="password" ref={password} minLength = "6"></input>
          <br/>
          <label for="username">Enter username:</label>
          <input type="text" id="username" name="username" ref ={username}></input>
          <button  className='font-semibold bg-sky-300 text-black px-24 py-2 mt-6 rounded  ' disabled={isFetching}>{isFetching? <CircularProgress size="20px"/>:"Login"}</button>

          <h6 className='text-sm mt-6'>forgot password</h6>

          <button className='bg-sky-300 px-4 py-2 rounded mt-6'>Create a new account</button>
        </form>
    </div>
  )
}

export default Login
