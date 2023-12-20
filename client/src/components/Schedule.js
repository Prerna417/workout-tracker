import React, { useState,useEffect,useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const Schedule = () => {
  const [userSchedule, setUserSchedule] = useState(null);

  const { user } = useContext(AuthContext);

  useEffect(()=>{
    const fetchSchedule= async() =>{
      try{
        if(!user){
          console.log("user not logged in");
          return;
        }

        const res = await axios.get(`schedules/${user.username}`);
        setUserSchedule(res.data);
      }catch(err){
        console.log(err);
      }
    };
    fetchSchedule();
  },[user]);
  
  return (
    <div className="container mx-auto py-8 ">
      <h2 className="text-2xl text-center font-bold mb-8 my-16">{user.username} Have A Look At Your Schedule</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {userSchedule ? (
        <div className='bg-white p-4 shadow-md rounded'>
        <h3 className="text-xl bg-sky-300 font-bold mb-10 text-center">{userSchedule.day}</h3>
         <div className='pl-4'>
          <h3 className='font-semibold text-sky-950 text-xl mb-8 text-center'>exercises</h3>
          <ul>
            {userSchedule.exercises.map((exercise) => (
              <li key={exercise._id}>
                <p>Name: {exercise.name}</p>
                <p>Duration: {exercise.duration} minutes</p>
              </li>
            ))}
          </ul>
         </div>
        </div>
      ):(
        <p>loading...</p>
      )}
      </div>
      <div className='mt-10 pl-8'>
        <button className='bg-sky-200 p-4 rounded text-lg font-semibold'>Create Schedule</button>
      </div>

      <div className='mt-8 pt-4 ml-8 w-1/4 '>
        <form action='/submit' method="post" className='flex flex-col items-center bg-slate-300 py-5 h-[300px] space-y-2'>
          <label for="day">Enter day:</label>
          <input type="text" id="day" name="day"></input>
          <br />
          <label for="exercise">Enter Exercises:</label>
          <input type="text" id="exercise" name="exercise"></input>
          <br/>
          <label for="duration">Enter duration:</label>
          <input type="text" id="duration" name="duration"></input>
        </form>
      </div>
    </div>
  );
};

export default Schedule;



