import React, { useState,useEffect,useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import DeleteIcon from '@mui/icons-material/Delete';
import { duration } from '@mui/material';


const Schedule = () => {
  const [userSchedule, setUserSchedule] = useState([]);
  const [day,setDay] = useState([]);
  const [openForm,setOpenForm] = useState(false);
  const [exercises,setExercises] = useState([{
      exercise:"",
      duration: "",
  },
]);
  const [quote,setQuote] = useState("");
  const [timers, setTimers] = useState({});
  const [activeTimer,setActiveTimer] = useState({});


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
    const quoteGen = async()=>{
      try{
      const storedQuote = localStorage.getItem("quote");
    const storedDate = localStorage.getItem("quoteDate");
    const currentDate = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format

    if (storedQuote && storedDate === currentDate) {
      // If a quote is already stored for the current day, use it
      setQuote(storedQuote);
    } else {
      // If no quote is stored for the current day, fetch a new one
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      const newQuote = data.content;
      console.log(newQuote);
      setQuote(newQuote);

      // Store the new quote and date in local storage
      localStorage.setItem("quote", newQuote);
      localStorage.setItem("quoteDate", currentDate);
    }
      }catch(err){
        console.log(err);
      }
    }
    fetchSchedule();
    quoteGen();
  },[user]);

  const handleSubmit =async (e) =>{
    e.preventDefault();
    const newSchedule = {
      userId:user._id,
      day:day,
      exercises:exercises
    };
    try{
      const res = await axios.post("schedules/createSchedule",newSchedule);
      setUserSchedule((prevSchedules) => [...prevSchedules, res.data]);
    }catch(err){
      console.log(err);
    }
  };

  const handleClick = async(e,scheduleId) =>{
    e.preventDefault();
    try{
      await axios.delete(`schedules/${scheduleId}`);
      setUserSchedule((prevSchedules) =>
      prevSchedules.filter((schedule) => schedule._id !== scheduleId))
    }catch(err){
      console.log(err);
    }
  }
  const handleExerciseChange = (index, field, value) => {
    const updatedExercises = [...exercises];
  if (field === 'duration') {
    // Parse the time input to extract hours and minutes
    const [hours, minutes] = value.split(':').map(Number);
    // Convert the time into minutes
    const durationInMinutes = hours * 60 + minutes;
    updatedExercises[index][field] = durationInMinutes;
  } else {
    updatedExercises[index][field] = value;
  }
  setExercises(updatedExercises);
  };

  const startTimer = (scheduleId, duration) => {
    if (activeTimer[scheduleId]) return; // Prevent multiple timers for the same schedule

    const endTime = Date.now() + duration * 60000; // Calculate end time

    const intervalId = setInterval(() => {
      const remainingTime = endTime - Date.now();
      if (remainingTime <= 0) {
        clearInterval(intervalId);
        setTimers((prev) => ({ ...prev, [scheduleId]: null }));
        setActiveTimer((prev) =>({ ...prev, [scheduleId]:false}));
        alert(`Timer has ended!`);
      } else {
        const minutes = Math.floor((remainingTime / 1000) / 60);
        const seconds = Math.floor((remainingTime / 1000) % 60);
        setTimers((prev) => ({ ...prev, [scheduleId]: `${minutes}:${seconds < 10 ? '0' : ''}${seconds}` }));
      }
    }, 1000);
   
    setActiveTimer((prev) => ({ ...prev, [scheduleId]: intervalId }));
  };

  const isCurrentDay = (days) => {
    const today = new Date().toLocaleString('en-us', { weekday: 'long' }).toLowerCase();
    return days.map(day => day.toLowerCase()).includes(today);
  };

  const stopTimer = (scheduleId) => {
    clearInterval(activeTimer[scheduleId]); // Clear the interval using the stored intervalId
    setTimers((prev) => ({ ...prev, [scheduleId]: null }));
    setActiveTimer((prev) => ({ ...prev, [scheduleId]: false }));
  };
  
  
  return (
    <div className=" py-8 bg-gradient-to-b from-black via-black to-gray-800">
      <h2 className="text-2xl text-center font-bold mb-8 my-16 text-white">{user.username} Have A Look At Your Schedule</h2>
      <h2 className='text-white text-center mb-4'>{quote}</h2>
      <div className="justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      { userSchedule.length > 0 ? (
      userSchedule.map((schedule)=> (
        <div key={schedule._id} className='bg-white p-4 rounded flex flex-col w-96' >
          
          <h3  className="text-xl bg-sky-300 font-bold mb-10 text-center">{schedule.day.join(',')}</h3>
      
         <div className='pl-4'>
          <h3 className='font-semibold text-sky-950 text-xl mb-8 text-center'>exercises</h3>
          <ul>
            {schedule.exercises.map((exercise) => (
              <li key={exercise._id}>
                <p>Name: {exercise.exercise}</p>
                <p>Duration: {exercise.duration} minutes</p>
                {isCurrentDay(schedule.day) && (
                  <>
                        <button
                          onClick={() => startTimer(schedule._id, exercise.duration)}
                          className="bg-blue-500 text-white py-4 px-8 rounded mt-2"
                        >
                          {timers[schedule._id] || `Start Timer`}
                        </button >
                        {activeTimer[schedule._id] && <button className="bg-red-500 text-white py-2 px-4 rounded mt-2 ml-4" onClick={() => {stopTimer(schedule._id)}}>Stop</button>}
                        </>
                  )}
              </li>
            ))}
          </ul>
         </div>
         <div className='ml-auto'>
           <button onClick={(e) => handleClick(e,schedule._id)}><DeleteIcon /></button>
          </div>
        </div>
      ))
    ):(
      <p>No schedules available</p>
    )}
      </div>
      <div className='mt-10 flex justify-center'>
        <button className='bg-sky-200 p-4 rounded text-lg font-semibold' onClick={() => setOpenForm(!openForm)}>Create Schedule</button>
      </div>
      {openForm && 
      <div className='mt-8 pt-4  flex justify-center '>
        <form onSubmit={handleSubmit} className='flex flex-col items-center bg-slate-300 px-6 py-5 h-[300px] '>
          
          <label htmlFor="day">Enter days:</label>
          <input type="text" id="day" name="day" value={day.join(',')} onChange={(e) => setDay(e.target.value.split(','))}></input>
          <br />
          {exercises.map((exercise,index)=>(
            <div key={index} className='space-y-6'>
          <label htmlFor="exercise">Enter Exercises:</label>
          <input type="text" id="exercise" name="exercise" value={exercise.exercise} onChange={(e) => handleExerciseChange(index, 'exercise', e.target.value)} ></input>
          <br/>
          <label htmlFor="duration">Enter duration:</label>
          <input type="time" id="duration" name="duration" value={exercise.duration} onChange={(e) => handleExerciseChange(index, 'duration', e.target.value)}></input>
          </div>
          ))} 
          <button type="submit" className="bg-white px-4 py-2 rounded mt-8 font-semibold" >submit</button>
        </form>
      </div>
}
    </div>
  );
};

export default Schedule;