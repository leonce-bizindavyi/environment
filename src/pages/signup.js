import React from 'react'

export default function Singup() {
  return (
    <div className=' z-0 bg-gray-300  w-[100%] mx-auto h-screen bg-gray-100 '>
      <div className='login z-50 relative w-full lg:w-[40%] h-full lg:mx-auto flex flex-col justify-center items-center space-y-2 bg-emerald-950'>
        
        <h1 className='text-white font-bold text-[2rem]'>Sign up</h1>
        <div className='inputs flex flex-col space-y-2 p-2 w-[80%] '>
          <label htmlFor='username' className='text-white text-[1.1rem] font-semibold'>
            name
          </label>
          <input
            type='text'
            id='username'
            required
            className='rounded-md p-2 bg-gray-200 border border-white focus:outline-none text-slate-600  font-semibold'
            
          />
          <label htmlFor='username' className='text-white text-[1.1rem] font-semibold'>
            Username
          </label>
          <input
            type='text'
            id='username'
            required
            className='rounded-md p-2 bg-gray-200 border border-white focus:outline-none text-slate-600  font-semibold'
            
          />
          {/* <span className='text-sm text-red-800'></span> */}
          <label htmlFor='password' className='text-white text-[1.1rem] font-semibold'>
            Password
          </label>
          <input
            type='password'
            id='password'
            required
            className='rounded-md p-2 bg-gray-200 border border-white focus:outline-none  text-slate-600 font-semibold'
            
          />
          {/* <span className='text-sm text-red-800'>{invalid ? 'Invalid password' : ''}</span> */}
          <label htmlFor='password' className='text-white text-[1.1rem] font-semibold'>
            Confirm password
          </label>
          <input
            type='password'
            id='password'
            required
            className='rounded-md p-2 bg-gray-200 border border-white focus:outline-none  text-slate-600 font-semibold'
            
          />
          {/* <span className='text-sm text-red-800'>{invalid ? 'Invalid password' : ''}</span> */}
          <button
            className='text-white px-4 py-2 text-[1rem] font-semibold bg-emerald-600 rounded-md hover:bg-emerald-700 transition-all '
          >
            Login
          </button>
        </div>
        <div className='flex justify-between w-[70%]'>
          <span className='text-blue-500 cursor-pointer' >
            have account?
          </span>
        </div>
      </div>
    </div>
  )
}
