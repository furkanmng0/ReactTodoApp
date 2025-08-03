import React from 'react'
import { FaRegCircle } from "react-icons/fa6";
import { FaRegTrashAlt ,FaRegCheckCircle  } from "react-icons/fa";


const TodoItem = ({todo, toggle,deleteTodo}) => {
    
  return (
    <div className='w-full flex items-center gap-2  p-4 cursor-pointer '
    onClick={()=>toggle(todo.id)}>
      {todo.isComplete ? (
        <FaRegCheckCircle className='text-[#27374D] size-5'  />
      ):(
        <FaRegCircle className='text-[#27374D] size-5'  />
      )}
       <p className={`flex-1 ${todo.isComplete ?"line-through" :""}`}> {todo.text} </p>
      <FaRegTrashAlt className='text-[#27374D] size-5 hover:scale-110 transition-all ' onClick={()=>deleteTodo(todo.id) }/>
    </div>
  )
}

export default TodoItem; 