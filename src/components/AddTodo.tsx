'use client'

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

const AddTodo: React.FC = () => {
  const [input, setInput] = useState<string>('')
  const dispatch = useDispatch()

  const addTodoHandler = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    dispatch(addTodo(input))
    setInput('')
  }

  return (
    <form onSubmit={addTodoHandler} className="flex justify-center flex-col sm:flex-row items-center gap-3 my-8">
      <input
        type="text"
        className="w-full sm:w-auto bg-gray-800 rounded-lg border border-gray-600 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-600 text-white py-2 px-4 transition-all duration-200 outline-none"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-6 rounded-lg transition-all duration-200"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo
