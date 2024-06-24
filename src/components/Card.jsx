import React from 'react'
import { useState} from 'react';

const Card = () => {
  const [inputTodo, setInputTodo] = useState("");
  const [userTodos, setUserTodos] = useState([]);

  const handleInput = (event) => {
    setInputTodo(event.target.value);
  }

  const handleAdd = (event) => {
    setUserTodos([...userTodos, {inputTodo}]);
    setInputTodo("");
  }

  return (
    <div className='card bg-[#FFFFFF] h-auto max-h-[90%] w-[50%] min-w-[280px] p-5 rounded-xl'>
      <h2 className='text-[#002675] text-3xl font-bold text-center'>iTask Manager</h2>
      <div className='relative input-row flex justify-center items-center rounded-2xl w-[100%] px-3 my-10'>
      <input onChange={handleInput} value={inputTodo} type="text" className='w-[100%] min-w-60 bg-[#EDEEF0] py-3 px-4 rounded-full border-none outline-none' name="todo-input" id="todo-input" placeholder='Enter your task'/>
      <button type="submit" onClick={handleAdd} className='flex justify-center items-center bg-[#FF5945] h-[100%] w-[25%] rounded-full p-3 cursor-pointer text-white absolute right-0 min-w-20'>Add</button>
    </div>
      {userTodos.map((item) => (
        <>
          <div className='w-[100%] px-4 flex justify-evenly items-center my-5'>
            <div className="left flex justify-start items-start w-[90%]">
              <span className="todoName text-xl text-[#002675] font-semibold">{item.inputTodo}</span>
            </div>
            <div className="right flex justify-end gap-3 items-center w-[15%]">
              <button><i className="fa-solid fa-pen-to-square text-[#002675] text-xl"></i></button>
              <button><i className="fa-solid fa-trash-can text-[#002675] text-xl"></i></button>
            </div>
          </div>
        </>
      ))}
    </div>
  )
}

export default Card;
