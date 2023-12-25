import React, { useState,useEffect,useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const Schedule = () => {
  const [userSchedule, setUserSchedule] = useState([]);
  const [day,setDay] = useState("");
  const [exercises,setExercises] = useState([{
      exercise:"",
      duration: "",
  },
]);


  const { user } = useContext(AuthContext);

  useEffect(()=>{
    const fetchSchedule= async() =>{
      try{
        if(!user){
          console.log("user not logged in");
          return;
        }

        const res = await axios.get(`schedules/${user.username}`);
        console.log(res.data);
        setUserSchedule(res.data);
      }catch(err){
        console.log(err);
      }
    };
    fetchSchedule();
  },[user]);

  const handleSubmit =async (e) =>{
    e.preventDefault();
    const newSchedule = {
      userId:user._id,
      day,
      exercises:[
        {
          exercise:exercises[0].exercise,
          duration:exercises[0].duration,
        },
      ],
    };
    try{
      const res = await axios.post("schedules/createSchedule",newSchedule);
      setUserSchedule((prevSchedules) => [...prevSchedules, res.data]);
    }catch(err){
      console.log(err);
    }
  };
  const handleExerciseChange = (index, field, value) => {
    const updatedExercises = [...exercises];  // Create a copy of the array
    updatedExercises[index][field] = value;   // Update the specific exercise in the copy
    setExercises(updatedExercises);          // Set the state with the updated array
  };
  
  return (
    <div className="container mx-auto py-8 ">
      <h2 className="text-2xl text-center font-bold mb-8 my-16">{user.username} Have A Look At Your Schedule</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      { userSchedule.length > 0 ? (
      userSchedule.map((schedule)=> (
        <div key={schedule._id} className='bg-white p-4 shadow-md rounded'>
        <h3 className="text-xl bg-sky-300 font-bold mb-10 text-center">{schedule.day}</h3>
         <div className='pl-4'>
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
    ):(
      <p>No schedules available</p>
    )}
      </div>
      <div className='mt-10 flex justify-center'>
        <button className='bg-sky-200 p-4 rounded text-lg font-semibold'>Create Schedule</button>
      </div>

      <div className='mt-8 pt-4  flex justify-center '>
        <form onSubmit={handleSubmit} className='flex flex-col items-center bg-slate-300 px-6 py-5 h-[300px] '>
          <label for="day">Enter day:</label>
          <input type="text" id="day" name="day" value={day} onChange={(e) => setDay(e.target.value)}></input>
          <br />
          {exercises.map((exercise,index)=>(
            <div key={index} className='space-y-6'>
          <label for="exercise">Enter Exercises:</label>
          <input type="text" id="exercise" name="exercise" value={exercise.exercise} onChange={(e) => handleExerciseChange(index, 'exercise', e.target.value)} ></input>
          <br/>
          <label for="duration">Enter duration:</label>
          <input type="number" id="duration" name="duration" value={exercise.duration} onChange={(e) => handleExerciseChange(index, 'duration', parseInt(e.target.value, 10))}></input>
          </div>
          ))}  
          <button type="submit" className="bg-white px-4 py-2 rounded mt-8 font-semibold">submit</button>
        </form>
      </div>
    </div>
  );
};

export default Schedule;



