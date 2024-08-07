import React, { useState, useEffect, } from 'react';
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';

function OthersRoutine() {
  const [allSchedule, setAllSchedule] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchSchedule = async () => {
      try {


        const res = await axios.get('routines/Allschedules');
        console.log(res.data);
        setAllSchedule(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSchedule();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`routines/${name}`);
      setAllSchedule(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  const handleKeyPress = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      try {
        const res = await axios.get(`routines/${name}`);
        console.log(res.data);
        setAllSchedule(res.data);
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <div className="p-10 bg-gradient-to-b from-black via-black to-gray-800">
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <h2 className="text-xl md:text-2xl font-semibold md:font-bold mb-8 mt-16 text-white">Have A Look At Schedule of various person</h2>
        <div className='p-4'>
          <label htmlFor="name" onClick={handleSubmit} className='text-white'><SearchIcon size="20px" /></label>
          <input type="text" id="name" name="exercise" onKeyDown={handleKeyPress} className='border-2px rounded-lg' placeholder='Enter a name' value={name} onChange={(e) => setName(e.target.value)}></input>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allSchedule && allSchedule.length > 0 ? (
          allSchedule.map((schedule) => (
            <div key={schedule._id} className='bg-white p-4 shadow-md rounded'>
              <h3 className="text-xl bg-sky-300 font-bold mb-10 text-center">{schedule.username}'s schedule</h3>
              <div className='pl-4'>
                <h3 className="text-xl font-bold mb-10 text-center">{schedule.day}</h3>
                <h3 className='font-semibold text-sky-950 text-xl mb-8 text-center'>exercises</h3>
                <ul>
                  {schedule.exercises.map((exercise) => (
                    <li key={exercise._id}>
                      <p>Name: {exercise.exercise}</p>
                      <p>Duration: {exercise.duration} minutes</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))
        ) : (
          <p>No schedules available</p>
        )}
      </div>
    </div>
  )
}

export default OthersRoutine
