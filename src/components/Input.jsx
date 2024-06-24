import React from 'react'

const Input = () => {
  return (
    <div className='relative input-row flex justify-center items-center rounded-2xl w-[100%] px-3 my-10'>
      <input type="text" className='w-[100%] min-w-60 bg-[#EDEEF0] py-3 px-4 rounded-full border-none outline-none' name="todo-input" id="todo-input" placeholder='Enter your task'/>
      <button type="submit" className='flex justify-center items-center bg-[#FF5945] h-[100%] w-[25%] rounded-full p-3 cursor-pointer text-white absolute right-0 min-w-20'>Add</button>
    </div>
  )
}

export default Input
