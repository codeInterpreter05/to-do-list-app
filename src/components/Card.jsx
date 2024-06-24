import React from 'react'
import Input from './Input'
import Todo from './Todo'

const Card = () => {
  return (
    <div className='card bg-[#FFFFFF] h-[70%] w-[50%] min-w-[280px] p-5 rounded-xl'>
      <h2 className='text-[#002675] text-3xl font-bold text-center'>iTask Manager</h2>
      <Input></Input>
      <Todo></Todo>
    </div>
  )
}

export default Card
