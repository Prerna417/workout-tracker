import React from 'react'

export default function Footer() {
    return (
        <div className='bg-gradient-to-b from-black via-black to-gray-800 w-full h-[] bottom-0 px-10'>
            <div className='' >
                <h1 className='pt-5 text-white text-3xl font-bold'>
                    Download Workout Tracker
                </h1>
            </div>
            <div className='flex md:flex-row flex-col text-white sm:space-y-8
            items-center justify-between'>
                <div className='px-4 mb-12 md:mb-0'>
                    <p className='mb-8'>Gym workouts to achieve your goals, track your strength training and GET RESULTS!</p>
                    <button className='text-black bg-white text-xl  rounded-lg mr-10 p-3'>Download On<br /> The App Store</button>
                    <button className='text-black bg-white text-xl rounded-lg p-3'>Get it on <br /> Google Play</button>
                </div>
                <div>
                    <h1 className='text-3xl mb-6'>Contact US!</h1>
                    <p className='mb-3'> Mobile No. : (+91)-3456782758</p>
                    <p> Email: abc@gmail.com</p>
                    <div className='flex space-x-3 mt-3 pl-4 mb-8'>
                        <a href="#" className='text-2xl'>
                            <i className='bx bxl-facebook-square'></i>
                        </a>
                        <a href="#" className='text-2xl'>
                            <i className='bx bxl-twitter' ></i>
                        </a>
                        <a href="#" className='text-2xl'>
                            <i className='bx bxl-instagram' ></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className='flex justify-center text-white mt-2'>
                <a href='#' className='text-xl'><i className='bx bx-copyright' ></i></a>
                <p>2023 MyFitnessPal, Inc.
                    Community Guidelines
                    Feedback
                    Terms
                    Privacy
                    API
                    Ad Choices
                    Do Not Sell My Personal Information</p>
            </div>
        </div>
    )
}
