import React from 'react'

function Register() {
  return (
    <div className='container mx-auto py-8 flex justify-center'>
     <form action='/submit' method="post" className=' mt-16 flex flex-col items-center bg-slate-300 py-5 w-[300px] space-y-2'>
          <label for="email">Enter email:</label>
          <input type="email" id="email" name="email"></input>
          <br />
          <label for="password">Enter password:</label>
          <input type="password" id="password" name="password"></input>
          <br/>
          <label for="username">Enter username:</label>
          <input type="text" id="username" name="username"></input>
        </form>
    </div>
  )
}

export default Register;
