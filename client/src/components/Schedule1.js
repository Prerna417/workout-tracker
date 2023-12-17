import React from 'react'

export default function Schedule1() {
  return (
    <div className='container mx-auto py-8'>
      <h2 className='text-3xl font-bold mt-16 mb-8'>Schedule</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <div className='bg-gray-300 rounded shadow-md p-4'>
                <h1 className='text-2xl font-semibold'>Monday</h1>
                <ul className='mb-4 pl-4'>
                    <li>running</li>
                    <li>swimming</li>
                    <li>running</li>
                </ul>
                <button className='bg-blue-600 p-4 text-white rounded-xl'>Add an Exercise</button>
            </div>
            <div className='bg-gray-300 rounded shadow-md p-4'>
                <h1 className='text-2xl font-semibold'>Tuesday</h1>
                <ul className='mb-4 pl-4'>
                    <li>running</li>
                    <li>swimming</li>
                    <li>running</li>
                </ul>
                <button className='bg-blue-600 p-4 text-white rounded-xl'>Add an Exercise</button>
            </div>
            <div className='bg-gray-300 rounded shadow-md p-4'>
                <h1 className='text-2xl font-semibold'>wednesday</h1>
                <ul className='mb-4 pl-4'>
                    <li>running</li>
                    <li>swimming</li>
                    <li>running</li>
                </ul>
                <button className='bg-blue-600 p-4 text-white rounded-xl'>Add an Exercise</button>
            </div>
            <div className='bg-gray-300 rounded shadow-md p-4'>
                <h1 className='text-2xl font-semibold'>Thursday</h1>
                <ul className='mb-4 pl-4'>
                    <li>running</li>
                    <li>swimming</li>
                    <li>running</li>
                </ul>
                <button className='bg-blue-600 p-4 text-white rounded-xl'>Add an Exercise</button>
            </div>
            <div className='bg-gray-300 rounded shadow-md p-4'>
                <h1 className='text-2xl font-semibold'>Friday</h1>
                <ul className='mb-4 pl-4'>
                    <li>running</li>
                    <li>swimming</li>
                    <li>running</li>
                </ul>
                <button className='bg-blue-600 p-4 text-white rounded-xl'>Add an Exercise</button>
            </div>
      </div>
    </div>
  )
}
