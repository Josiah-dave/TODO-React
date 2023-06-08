// import React from 'react'
// import 'tailwindcss/tailwind.css';

const Input = () => {
  return (
    <div className="md:max-w-[60%] max-w-[100%] box flex justify-between mx-auto items-center">
        <input type="text" placeholder="Add new task" className='bg-gray-100 rounded-lg px-4 py-3 shadow-purple-900 shadow-inner focus:outline-none focus:shadow-outline w-[80%] md:w-[90%] placeholder:text-lg text-lg' />
        <button className="bg-black border-white border-[2px] shadow-xl rounded-2xl md:rounded-full text-center h-12 w-12 text-white text-3xl shadow-purple-950">+</button>
    </div>
  )
}

export default Input