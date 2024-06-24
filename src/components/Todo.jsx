import React from 'react'

const Todo = () => {
  return (
    <div className='w-[100%] px-4 flex justify-between items-center'>
      <div className="left flex justify-start items-center w-[80%] gap-2">
        <input type="checkbox" value="" name="checckbox" id="checkbox" className='h-5 w-5 rounded-full'/>
        <span className="todoName text-xl text-[#002675] font-semibold">Buy grocery items</span>
      </div>
      <div className="right flex justify-end gap-3 items-center w-[15%]">
        <button><i class="fa-solid fa-pen-to-square text-[#002675] text-xl"></i></button>
        <button><i class="fa-solid fa-trash-can text-[#002675] text-xl"></i></button>
      </div>
    </div>
  )
}

export default Todo
