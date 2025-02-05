'use client'


import { Provider } from "react-redux";
import store from "@/store";
import AddTodo from "@/components/AddTodo";
import Todos from "@/components/Todos";


export default function Home() {
  return (
    <Provider store={store}>
      <div className="max-h-screen py-6">
        <h1 className='bg-gray-700 text-center mx-auto w-1/2 text-2xl p-2 rounded text-white'>
        Next Redux Toolkit with Tailwind & TypeScript
        </h1>
        <AddTodo />
        <Todos />
      </div>
    </Provider>
  );
}
