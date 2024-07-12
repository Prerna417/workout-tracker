import React from 'react'
import workout from '../assets/workout.jpg'
import photo from '../assets/1.avif';
import photo2 from '../assets/2.jpeg';
import photo3 from '../assets/3.jpeg';
import yoga from '../assets/yog.jpg';

export default function Home() {
    return (
        <div className='relative flex flex-col w-full h-auto bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='md:mb-40 mb-16'>
                <img src={workout} className='opacity-50 object-fit w-full h-[90vh]' />
                <div className='absolute lg:top-60 lg:right-40 top-72 right-8'>
                    <h1 className='text-white text-3xl  md:text-4xl lg:text-5xl mb-4'>Get Energised</h1>
                    <h2 className='text-white text-2xl  md:text-3xl lg:text-4xl mb-2'>Stay Humble</h2>
                    <h2 className='text-white text-2xl  md:text-3xl lg:text-4xl '>Hustle Hard</h2>
                    <button className=' bg-white rounded-2xl lg:p-4 xl:p-5 p-2 pr-8 lg:pr-12 xl:pr-16 text-md lg:text-lg font-semibold mt-8'>Get App Now!</button>
                </div>
            </div>
            <div className='flex md:flex-row flex-col items-center justify-center md:mb-40 mb-20 md:space-x-10 space-y-10 md:space-y-0'>
                <div className='flex flex-col justify-center items-center w-[350px] h-auto  '>
                    <img src={photo} className=' ' />
                    <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis finibus purus, eu vestibulum lacus hendrerit id. </p>
                </div>
                <div className='flex flex-col justify-center items-center w-[350px] h-auto '>
                    <img src={photo2} className='' />
                    <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis finibus purus, eu vestibulum lacus hendrerit id. </p>
                </div>
                <div className='flex flex-col justify-center items-center w-[350px] h-auto '>
                    <img src={photo3} className='' />
                    <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis finibus purus, eu vestibulum lacus hendrerit id. </p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center mx-auto mb-24 '>
                <div className='md:mr-20 mb-12'>
                    <img src={yoga} className='md:h-[450px] h-[350px]' />
                </div>
                <div className='flex flex-col p-8'>
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
