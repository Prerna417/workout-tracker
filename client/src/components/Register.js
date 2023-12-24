import React, {useRef} from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const email = useRef();
  const password = useRef();
  const Confirmpassword = useRef();
  const username = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(Confirmpassword.current.value != password.current.value){
      password.current.setCustomValidity("password does not match!");
    }else{
      const user = {
        username: username.current.value,
        password:password.current.value,
        email:email.current.value
      };
      try{
       const res = await axios.post("auth/register",user);
        console.log(res.data);
       navigate('/Login');
      }
      catch(err){
        console.log(err);
      }
    }
  }

  return (
    <div className='container mx-auto py-8 flex justify-center'>
     <form onSubmit={handleSubmit} className=' mt-16 flex flex-col items-center bg-slate-300 py-5 w-[300px] space-y-2'>
          <label for="email">Enter email:</label>
          <input type="email" id="email" name="email" ref={email} required></input>
          <br />
          <label for="password">Enter password:</label>
          <input type="password" id="password" name="password" ref={password} required minLength="6"></input>
          <br/>
          <label for="Confirmpassword">confirm password:</label>
          <input type="password" id="Confirmpassword" name="password" ref={Confirmpassword} required></input>
          <br/>
          <label for="username">Enter username:</label>
          <input type="text" id="username" name="username" ref={username} required></input>
          <button className='bg-sky-300 px-24 py-2 rounded mt-6' type='submit'>Register</button>
          <h3>already have an account</h3>
          <button className='bg-sky-300 px-6 py-2 rounded mt-6'><Link to="/Login">login</Link></button>
        </form>
    </div>
  )
}

export default Register;
