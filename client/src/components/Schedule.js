import React, { useState } from 'react';

const Schedule = () => {
  // Assuming schedule is an array of objects, each representing a day's schedule
  const [schedule, setSchedule] = useState([
    { day: 'Monday', exercises: [] },
    { day: 'Tuesday', exercises: [] },
    { day: 'Wednesday', exercises: [] },
    { day: 'Thursday', exercises: [] },
    { day: 'Friday', exercises: [] },
    { day: 'Saturday', exercises: [] },
    { day: 'Sunday', exercises: [] }
  ]);

  // Function to add an exercise to a specific day's schedule
  const addExerciseToDay = (dayIndex, exercise) => {
    setSchedule(prevSchedule => {
      const updatedSchedule = [...prevSchedule];
      updatedSchedule[dayIndex].exercises.push(exercise);
      return updatedSchedule;
    });
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Schedule</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {schedule.map((day, index) => (
          <div key={index} className="bg-white p-4 shadow-md rounded">
            <h3 className="text-xl font-bold mb-2">{day.day}</h3>
            <ul className="list-disc pl-4">
              {day.exercises.map((exercise, i) => (
                <li key={i} className="mb-2">{exercise}</li>
              ))}
            </ul>
            {/* Add Exercise Button */}
            <button
              onClick={() => addExerciseToDay(index, 'New Exercise')}
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Add Exercise
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
