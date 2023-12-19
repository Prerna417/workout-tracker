import React from 'react'
import run from '../assets/run.jpg';
import swim from '../assets/swim.jpg';
import hiit from '../assets/HIIT.jpg';
import pushup from '../assets/pushup.jpg';
import squat from '../assets/squats.jpg';
import lunge from '../assets/lunges.jpg';






export default function Exercise() {
    return (
        <div className='flex flex-col mx-auto w-full h-auto bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='mt-24 pt-10 mb-24'>
                <h1 className='text-white text-4xl mb-10 pl-18 ml-16'>Cardio Exercises</h1>
                <div className='flex justify-center items-center gap-8'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 justify-items-start'>
                        <div className='h-[400px] w-[400px]  '>
                            <img src={run} className='h-[300px] ' />
                            <p className='text-white mt-4 text-2xl text-center'>Running</p>
                            <div className='flex space-x-44'>
                                <button className='bg-white rounded-lg py-3 font-bold px-8'>Add</button>
                               
                            </div>
                        </div>

                        <div className='h-[400px] w-[400px] '>
                            <img src={swim} className='h-[300px] ' />
                            <p className='text-white mt-4 text-2xl text-center'>swimming</p>
                            <div className='flex space-x-44'>
                                <button className='bg-white rounded-lg py-3 font-bold px-8'>Add</button>
                                
                            </div>
                        </div>

                        <div className='h-[400px] w-[400px] '>
                            <img src={hiit} className='h-[300px] ' />
                            <p className='text-white mt-4 text-2xl text-center'>HIIT workout</p>
                            <div className='flex space-x-44'>
                                <button className='bg-white rounded-lg py-3 font-bold px-8'>Add</button>
                                
                            </div>
                        </div>
                    </div>
                    <div className='h-[45px] w-[45px] bg-white flex justify-center items-center rounded-3xl'>
                        <button className='text-black text-3xl '><i class='bx bxs-chevron-right' ></i></button>
                    </div>
                </div>
            </div>

            <div className='mb-24'>
                <h1 className='text-white text-4xl mb-10 pl-18 ml-16'>Strength Training</h1>
                <div className='flex justify-center items-center gap-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 justify-items-start'>
                        <div className='h-[400px] w-[400px] '>
                            <img src={pushup} className='h-[300px] ' />
                            <p className='text-white mt-4 text-2xl text-center'>PushUp</p>
                            <div className='flex space-x-44'>
                                <button className='bg-white rounded-lg py-3 font-bold px-8'>Add</button>
                                
                            </div>
                        </div>

                        <div className='h-[400px] w-[400px] '>
                            <img src={lunge} className='h-[300px] ' />
                            <p className='text-white mt-4 text-2xl text-center'>lunges</p>
                            <div className='flex space-x-44'>
                                <button className='bg-white rounded-lg py-3 font-bold px-8'>Add</button>
                               
                            </div>
                        </div>

                        <div className='h-[400px] w-[400px] '>
                            <img src={squat} className='h-[300px] ' />
                            <p className='text-white mt-4 text-2xl text-center'>Squats</p>
                            <div className='flex space-x-44'>
                                <button className='bg-white rounded-lg py-3 font-bold px-8'>Add</button>
                                
                            </div>
                        </div>
                    </div>
                    <div className='h-[45px] w-[45px] bg-white flex justify-center items-center rounded-3xl'>
                        <button className='text-black text-3xl '><i class='bx bxs-chevron-right' ></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
