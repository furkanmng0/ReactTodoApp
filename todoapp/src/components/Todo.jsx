import React, { useEffect, useRef, useState } from 'react'
import { FaClipboardList } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import TodoItem from './TodoItem';



const Todo = () => {

  const [todos,setTodos]=useState(
    localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")):[]
  );

  const data=useRef(); 
  const addTodos=()=>{

    const inputText=data.current.value.trim();

    if(inputText===""){
      alert("boş girilmez")
    }

    const newTodo={
      id: todos.length +1,
      text: inputText,
      isComplete:false,

    }
    setTodos((prev)=>[...prev,newTodo]);
    data.current.value=""};

    const toggle=(id)=>{
      setTodos((prevTodos)=>{
        return prevTodos.map((todo) =>{
          if(todo.id===id){
            return {...todo,isComplete: !todo.isComplete};
          }
          return todo;
        } );
      });
    };

    const deleteTodo=(id)=>{
      setTodos((prevTodos)=>{
        return prevTodos.filter((todo)=> todo.id !== id );
      })
    }

    useEffect(()=>{
      localStorage.setItem("todos",JSON.stringify(todos));
    },[todos])



  return (
    <div className='place-self-center bg-white w-[450px] h-[600px] p-16 flex flex-col gap-8 rounded-lg '>
    {/* Başlık Kısmı */}
        <h1 className='text-xl font-bold tracking-wider flex items-center gap-3'> <FaClipboardList />
 Todo App</h1>

    {/* Arama kısmı */}
    <div className='flex bg-[#004030] items-center rounded-full text-white'>
        <input 
        ref={data}
        type="text" 
        className='border-none outline-none  p-2  flex-1  bg-transparent placeholder:text-slate-100 '
        placeholder='Yeni bir görev gir'/>
        <div className='cursor-pointer' onClick={()=> addTodos()}>
          <CiCirclePlus className='size-8 text-[#DDE6ED]  ' />
        </div>
    </div>

    {/* Listelenen görevler */}
    <div className='mt-5 '>
      {
        todos.map((todo)=>(
          <TodoItem key={todo.id} todo={todo} toggle={toggle} deleteTodo={deleteTodo} />
        ))
      }
    </div>



    </div>
  )
}

export default Todo