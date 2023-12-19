import React, { useState } from 'react';

const Schedule = () => {
  // Assuming schedule is an array of objects, each representing a day's schedule
  // const [schedule, setSchedule] = useState([
  //   { day: 'Monday', exercises: [] },
  //   { day: 'Tuesday', exercises: [] },
  //   { day: 'Wednesday', exercises: [] },
  //   { day: 'Thursday', exercises: [] },
  //   { day: 'Friday', exercises: [] },
  //   { day: 'Saturday', exercises: [] },
  //   { day: 'Sunday', exercises: [] }
  // ]);

  // // Function to add an exercise to a specific day's schedule
  // const addExerciseToDay = (dayIndex, exercise) => {
  //   setSchedule(prevSchedule => {
  //     const updatedSchedule = [...prevSchedule];
  //     updatedSchedule[dayIndex].exercises.push(exercise);
  //     return updatedSchedule;
  //   });
  // };

  return (
    <div className="container mx-auto py-8 ">
      <h2 className="text-2xl text-center font-bold mb-8 my-16"> Prerna Have A Look At Your Schedule</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className='bg-white p-4 shadow-md rounded'>
        <h3 className="text-xl bg-sky-300 font-bold mb-10 text-center">Monday</h3>
         <div className='pl-4'>
          <h3 className='font-semibold text-sky-950 text-xl mb-8 text-center'>Skipping</h3>
          <h4 className='font-semibold text-sky-950 mb-10 text-lg text-center'>duration:10min</h4>
         </div>
        </div>
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



