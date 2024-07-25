import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';

const Exercise = () => {
  const [exercises, setExercises] = useState([]);
  const [category, setCategory] = useState("");
  const [selectedExercise, setSelectedExercise] = useState(null);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const res = await axios.get("exercises/exercise");
        setExercises(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchExercises();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`exercises/${category}`);
      setExercises(res.data.exercises);
    } catch (err) {
      console.log(err);
    }
  }

  const handleKeyPress = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      try {
        const res = await axios.get(`exercises/${category}`);
        setExercises(res.data.exercises);
      } catch (err) {
        console.log(err);
      }
    }
};
  const handleExerciseClick = (exercise) => {
    setSelectedExercise(exercise);
  };

  const handleCloseModal = () => {
    setSelectedExercise(null);
  };

  

  return (
    <div className='flex flex-col mx-auto w-full h-auto bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='mt-24 pt-10 mb-24'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className="text-2xl text-white text-center font-bold mb-8 ml-8">Exercises</h2>
          <div>
            <label htmlFor="name" onClick={handleSubmit} className='text-white'><SearchIcon size="20px " /></label>
            <input type="text" id="name" onKeyDown={handleKeyPress} name="exercise" className='border-2px mr-8' value={category} onChange={(e) => setCategory(e.target.value)}></input>
          </div>
        </div>
        <div className='flex justify-center items-center gap-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-start'>
            {exercises.map((exercise) => (
              <div key={exercise._id} className='h-[400px] w-[400px]'>
                <img
                  src={exercise.imageUrl}
                  alt={exercise.name}
                  className='h-[300px]'
                  onClick={() => handleExerciseClick(exercise)}
                  style={{ cursor: 'pointer' }}
                />
                <p className='text-white mt-4 text-2xl text-center'>{exercise.name}</p>
                <p className='text-white mt-4 text-2xl text-center'>{exercise.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedExercise && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative w-[600px] bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">{selectedExercise.name}</h2>
            <p className="text-gray-800">{selectedExercise.description}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Exercise;
