import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';


const Card = () => {
  const [inputTodo, setInputTodo] = useState("");
  const [userTodos, setUserTodos] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const todoString = localStorage.getItem("userTodos");
    if (todoString) {
      const userTodos = JSON.parse(todoString);
      setUserTodos(userTodos);
    } else {
      setUserTodos([]);  // Set empty array if no data in localStorage
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userTodos", JSON.stringify(userTodos));
  }, [userTodos]);

  const handleInput = (event) => {
    const userInput = event.target.value;
    setInputTodo(userInput.charAt(0).toUpperCase() + userInput.slice(1));
  };

  const handleAdd = () => {
    if (userTodos.length >= 6) {
      setMessage("You cannot add more than 6 Todos");
      return;
    }

    if (inputTodo === "") {
      setMessage("Todo Cannot be Empty");
      return;
    }

    if (inputTodo.length < 3) {
      setMessage("Todo needs to be of minimum 3 characters");
      return;
    }

    if (inputTodo.length > 25) {
      setMessage("Todo can be of maximum 25 characters");
      return;
    }

    setUserTodos((prevTodos) => [
      ...prevTodos,
      { id: uuidv4(), inputTodo, isCompleted: false },
    ]);
    setInputTodo("");
    setMessage("Todo added successfully");
  };

  const handleTickChange = (event) => {
    const id = event.target.name;
    setUserTodos((prevTodos) => {
      const newTodos = prevTodos.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      );
      const updatedItem = newTodos.find((item) => item.id === id);
      setMessage(
        `Todo "${updatedItem.inputTodo}" marked as ${
          updatedItem.isCompleted ? "done" : "undone"
        }`
      );
      return newTodos;
    });
  };

  const handleDelete = (id) => {
    setUserTodos((prevTodos) => {
      const newTodos = prevTodos.filter((item) => item.id !== id);
      setMessage("Todo deleted successfully");
      return newTodos;
    });
  };

  const handleEdit = (id) => {
    setMessage("Click on Add button after editing");
    const toEditTodo = userTodos.find((item) => item.id === id);
    setInputTodo(toEditTodo.inputTodo);
  };

  return (
    <div className='card bg-[#FFFFFF] h-auto max-h-[94%] w-[50%] min-w-[300px] p-5 rounded-xl'>
      <h2 className='text-[#002675] text-3xl font-bold text-center'>iTask Manager</h2>
      <h4 className='text-red-700 font-bold text-xl text-center mt-5'>{message}</h4>
      <div className='relative input-row flex justify-center items-center rounded-2xl w-[100%] px-3 my-10'>
        <input
          onChange={handleInput}
          value={inputTodo}
          type='text'
          className='w-[100%] min-w-60 bg-[#EDEEF0] py-3 px-4 rounded-full border-none outline-none'
          name='todo-input'
          id='todo-input'
          placeholder='Enter your task'
        />
        <button
          type='submit'
          onClick={handleAdd}
          className='flex justify-center items-center bg-[#FF5945] h-[100%] w-[25%] rounded-full p-3 cursor-pointer text-white absolute right-0 min-w-20'
        >
          Add
        </button>
      </div>
      {userTodos.map((item) => (
        <div key={item.id} className='w-[100%] px-4 flex justify-between items-center my-5'>
          <div className='left flex justify-start items-center gap-2 w-[80%]'>
            <input
              onChange={handleTickChange}
              type='checkbox'
              className='min-h-5 min-w-5 rounded-full'
              checked={item.isCompleted}
              name={item.id}
              id=''
            />
            <span
              className={`todoName text-xl text-[#002675] font-semibold ${
                item.isCompleted ? "line-through" : ""
              }`}
            >
              {item.inputTodo}
            </span>
          </div>
          <div className='right flex justify-end gap-3 items-center w-[15%]'>
            <button onClick={() => handleEdit(item.id)}>
              <i className='fa-solid fa-pen-to-square text-[#002675] text-xl'></i>
            </button>
            <button onClick={() => handleDelete(item.id)}>
              <i className='fa-solid fa-trash-can text-[#002675] text-xl'></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
