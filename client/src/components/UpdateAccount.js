import React, {useRef,useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { Logout } from '../context/AuthActions';

function UpdateAccount() {
  const email = useRef();
  const password = useRef();
  const Confirmpassword = useRef();
  const username = useRef();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { dispatch } = useContext(AuthContext);

  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(Confirmpassword.current.value != password.current.value){
      password.current.setCustomValidity("password does not match!");
    }else{
      const user1 = {
        userId:user._id,
        username: username.current.value,
        password:password.current.value,
        email:email.current.value
      };
      try{
       const res = await axios.put(`users/${user._id}`,user1);
       dispatch(Logout())
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
     <label htmlFor="username">Enter username:</label>
     <input type="text" id="username" name="username" ref={username} required></input>
          <label htmlFor="email">Enter email:</label>
          <input type="email" id="email" name="email" ref={email} required></input>
          <br />
          <label htmlFor="password">Enter password:</label>
          <input type="password" id="password" name="password" ref={password} required minLength="6"></input>
          <br/>
          <label htmlFor="Confirmpassword">confirm password:</label>
          <input type="password" id="Confirmpassword" name="password" ref={Confirmpassword} required></input>
          <br/>
          <button className='bg-sky-300 px-24 py-2 rounded mt-6' type='submit'>Update</button>
        </form>
    </div>
  )
}

export default UpdateAccount;
