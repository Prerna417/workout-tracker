import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function () {
  const  user  = true;
  const [menu, setMenu] = useState(false);


  return (
    <div className='flex items-center justify-between fixed px-4 w-full flex-wrap z-[30] h-20 bg-gray-800 text-white'>
      <div>
        <h1 className=''>Workout Tracker</h1>
      </div>

      <div>
        <ul className='hidden md:flex md:flex-row'>
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
          <li>
          <Link to="/Login">Login</Link>
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
