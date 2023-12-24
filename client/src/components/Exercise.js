import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';

const Exercise = () => {
    const [exercise, setExercise] = useState([]);
    const [category,setCategory] = useState("");

    useEffect(() => {
        const fetchExercises = async () => {
            try {
                const res = await axios.get("exercises/exercise");
                setExercise(res.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchExercises();
    }, []);

    const handleSubmit= async(e) =>{
        e.preventDefault();
        try{
          const res = await axios.get(`exercises/${category}`);
          console.log(res.data.exercises);
          setExercise(res.data.exercises);
        }catch(err){
          console.log(err);
        }
      }

    return (
        <div className='flex flex-col mx-auto w-full h-auto bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='mt-24 pt-10 mb-24'>
            <div className='flex justify-between items-center mb-4'>
      <h2 className="text-2xl text-white text-center font-bold mb-8 ml-8">Exercises</h2>
      <div>
      <label htmlFor="name" onClick={handleSubmit} className='text-white'><SearchIcon size="20px "/></label>
      <input type="text" id="name" name="exercise" className='border-2px mr-8' value={category} onChange={(e) => setCategory(e.target.value)}></input>
      </div>
      </div>
                <div className='flex justify-center items-center gap-8'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 justify-items-start'>
                    {exercise.map((p) => (
                        <div key={p._id} className='h-[400px] w-[400px]'>
                            <img src={p.imageUrl} alt={p.name} className='h-[300px]' />
                            <p className='text-white mt-4 text-2xl text-center'>{p.name}</p>
                            <p className='text-white mt-4 text-2xl text-center'>{p.category}</p>
                        </div>
                        ))
                    };
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Exercise;