import React from 'react'
import { useRef } from "react";

function Login() {
  const email = useRef();
  const password = useRef();


  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(email.current.value);
  }

  return (
    <div className='container mx-auto py-8 flex justify-center'>
     <form onSubmit={handleSubmit} className=' mt-16 flex flex-col items-center bg-slate-300 py-5 w-[300px] '>
          <label for="email">Enter email:</label>
          <input type="email" id="email" name="email" ref={email}></input>
          <br />
          <label for="password">Enter password:</label>
          <input type="password" id="password" name="password" ref={password} minLength = "6"></input>
          <br/>
          <label for="username">Enter username:</label>
          <input type="text" id="username" name="username"></input>
          <button className='font-semibold bg-white text-black px-4 py-2 mt-6 rounded '>Login</button>
        </form>
    </div>
  )
}

export default Login
