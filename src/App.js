import React, { useState } from 'react'

const App = () => {
  const [input, setInput] = useState('');
  const [todos, updateTodos] = useState([]);

  const addTodo = () => {
    if (input.trim() !== '') {
      const newTodo = {
        id: new Date().getTime(),
        value: input
      }
      updateTodos([...todos, newTodo]);
    }else{
      alert("Empty Field")
    }
    setInput('');
  }

  const delTodo = (id) => {
    const updatedTodo = todos.filter(todos => todos.id !== id);
    updateTodos(updatedTodo);
  }


  return (
    <div className='lg:h-screen lg:w-full flex flex-col items-center'>
      <h2 className='mt- text-5xl font-bold'>TODO LIST</h2>
      <div className='mt-20 mb-14'>
        <input className='lg:h-12 lg:w-96 text-3xl' type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button className='lg:h-12 lg:w-16 bg-black text-white text-3xl' onClick={addTodo}>+</button>
      </div>

      {todos.map((todo) => (
        <div className='lg:w-96 my-2 border-y py-1 border-y-black text-2xl flex justify-between'>
          <span> {todo.value} </span>
          <button className='bg-slate-700  text-white px-4' onClick={() => delTodo(todo.id)}>-</button>
        </div>
      ))}

      <footer className='w-full absolute bottom-0 bg-white text-center'>Made with ❤ by MK Gupta</footer>
    </div>
  )
}

export default App