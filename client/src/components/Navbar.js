import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";
import { Logout } from '../context/AuthActions';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function () {
  const { user } = useContext(AuthContext);
  const [menu, setMenu] = useState(false);
  const [profile, setProfile] = useState(false);
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();


  const handleLogout = () => {
    dispatch(Logout());
    setProfile(!profile);
    navigate('/');
  };

  const handleClick = async (e, userId) => {
    e.preventDefault();
    try {
      
      await axios.delete(`users/${userId}`);
      dispatch(Logout());
      navigate('/');
      setProfile(!profile);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='flex items-center justify-around fixed w-full z-[999] h-20 bg-gray-800 text-white'>
      <div>
        <h1 className='text-3xl'>Workout Tracker</h1>
      </div>

      <div className='flex items-center justify-center '>
        <ul className='hidden md:flex md:flex-row'>
          <li className="pr-7">
            <Link to="/">Home</Link>
          </li>
          <li className="pr-7">
            <Link to="/Schedule">Schedule</Link>
          </li>
          <li className="pr-7">
            <Link to="/OthersRoutine">Check Routine</Link>
          </li>
          <li className="pr-7">
            <Link to="/ExerciseQueryForm">Query</Link>
          </li>
          <li className="pr-7">
            <Link to="/Exercise">Exercise</Link>
          </li>
          <li>
            {!user && <Link to="/Login">Login/Register</Link>}
          </li>
          <li className='relative'>
            {user && <button onClick={() => setProfile(!profile)}>Profile</button>}
            <div className={`absolute mt-10 ${profile ? 'block' : 'hidden'} `}>
            {profile && (
            <ul className='w-32 flex flex-col bg-gray-800 space-y-4 p-4 rounded-lg text-center text-white '>
              <li className="border-b border-white cursor-pointer pb-2" onClick={handleLogout}>Logout</li>
              <li className="border-b border-white pb-2" onClick={()=>setProfile(!profile)}><Link to="/Register">Add a new account</Link></li>
              <li className=""><button onClick={(e) => handleClick(e, user._id)}>delete account</button></li>
            </ul>
          )}
        </div>
          </li>
        </ul>
      </div>
      <div className='md:hidden  '>
        <button
          className="text-white  "
          onClick={() => setMenu(!menu)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <div className={` ${menu ? 'block' : 'hidden'}`}>
          {menu && (
            <ul className=' flex flex-col basis-full absolute top-20 right-0 bg-gray-700 space-y-6 rounded-sm text-center text-white' >
              <li className="pr-7">
                <Link to="/">Home</Link>
              </li>
              <li className="pr-7">
                <Link to="/Schedule">Schedule</Link>
              </li>
              <li className="pr-7">
                <Link to="/">Check Routine</Link>
              </li>
              <li className="pr-7">
                <Link to="/ExerciseQueryForm">Query</Link>
              </li>
              <li className="pr-7">
                <Link to="/Exercise">Exercise</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}