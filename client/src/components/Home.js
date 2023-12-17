import React from 'react'
import workout from '../assets/workout.jpg'
import photo from '../assets/1.avif';
import photo2 from '../assets/2.jpeg';
import photo3 from '../assets/3.jpeg';
import yoga from '../assets/yog.jpg';

export default function Home() {
    return (
        <div className=' flex flex-col w-full h-auto bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='mb-40 relative'>
                <img src={workout} className=' object-fit w-full h-[80vh]' />
            </div>
            <div className='absolute top-60 right-40'>
                <h1 className='text-white text-5xl mb-4'>Get Energised</h1>
                <h2 className='text-white text-4xl mb-2'>Stay Humble</h2>
                <h2 className='text-white text-4xl '>Hustle Hard</h2>
                <button className=' bg-white rounded-2xl p-5 pr-16 text-lg font-semibold mt-8'>Get App Now!</button>
            </div>
            <div className='flex justify-center mb-40'>
                <div className='flex flex-col justify-center items-center w-[350px] h-[250px] mr-14'>
                    <img src={photo} className=' ' />
                    <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis finibus purus, eu vestibulum lacus hendrerit id. </p>
                </div>
                <div className='flex flex-col justify-center items-center w-[350px] h-[250px] mr-14'>
                    <img src={photo2} className='mr-14 w-[350px] h-[250px]' />
                    <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis finibus purus, eu vestibulum lacus hendrerit id. </p>
                </div>
                <div className='flex flex-col justify-center items-center w-[350px] h-[250px] '>
                    <img src={photo3} className=' w-[350px] h-[250px]' />
                    <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis finibus purus, eu vestibulum lacus hendrerit id. </p>
                </div>
            </div>
            <div className='flex justify-center mx-auto mb-24 '>
                <div className='mr-20'>
                    <img src={yoga} className='h-[450px]' />
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-white text-3xl border-b-2 pb-4 mb-10'>Track weight lifting workouts the smart way</h1>
                    <p className='text-white mb-14'>Awesome features to take your weight training to the next level.</p>
                    <div className='flex text-white'>
                        <div className='flex flex-col mr-16'>
                            <h1 className='text-2xl mb-8'>Hundreds Of Exercises</h1>
                            <p>
                                Log hundreds of exercises and add the ones you want
                            </p>
                        </div>
                        <div className='flex flex-col '>
                            <h1 className='text-2xl mb-8'>Awesome Charts</h1>
                            <p>
                                Log hundreds of exercises and add the ones you want
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
