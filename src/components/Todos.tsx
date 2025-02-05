'use client';

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoSlice';
import { RootState } from "@/store";
import { Trash2, Pencil } from "lucide-react";

interface Todo {
  id: string;
  text: string;
}

const Todos: React.FC = () => {

  const [editingId, setEditingId] = useState<string | null>(null);
  const [newText, setNewText] = useState<string>('');
  const todos = useSelector((state: RootState) => state.todo.todos);
  const dispatch = useDispatch();

  const handleUpdate = (id: string) => {
    if (newText.trim()) {
      dispatch(updateTodo({ id, newText }));
      setEditingId(null);
      setNewText('');
    }
  };

  return (
    <ul className="flex flex-col mx-auto max-w-7xl justify-center">
      {todos.map((todo: Todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center bg-gray-900 text-white px-4 py-3 my-2 rounded-md shadow-md"
        >
          {editingId === todo.id ? (
            <input
              type="text"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              className="text-black px-2 py-1 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
              autoFocus
              onKeyDown={(e) => e.key === 'Enter' && handleUpdate(todo.id)}
            />
          ) : (
            <span className="text-lg">{todo.text}</span>
          )}

          <div className="flex gap-2">
            {editingId !== todo.id ? (
              <button
                onClick={() => {
                  setEditingId(todo.id);
                  setNewText(todo.text);
                }}
                className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md transition"
              >
                <Pencil className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={() => handleUpdate(todo.id)}
                className="bg-green-500 hover:bg-green-600 text-sm text-white px-3 py-1 rounded-md transition"
              >
                Save
              </button>
            )}

            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Todos;
