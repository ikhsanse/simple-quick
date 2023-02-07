import React, { useEffect, useRef, useState } from "react";
import TodoList from "./TodoList";

const TodosMain = () => {
  const scrollRef= useRef()
  const [showFillter, setShowFillter] = useState(false);
  const [showInput,setShowInput] = useState(false)

  const openFilterHandler = () => {
    setShowFillter(!showFillter);
  };
  const showInputHandler = () => {
    setShowInput(!showInput)
  }

  useEffect(()=>{
    if(showInput) {
      scrollRef.current.scroll({
        top: 700,
        behavior: "smooth",
      });
    }
  },[showInput])

  return (
    <div className="font-lato px-[24px] py-[16px] 2xl:px-[32px] 2xl:py-[24px]">
      <div className="relative pb-3">
        <div className="flex justify-between">
          <div onClick={openFilterHandler} className="flex border-[1px] w-auto border-[#828282] py-1 px-3 rounded ml-14 cursor-pointer">
            <button className="bg-transparent text-[12px] 2xl:text-[16px] font-bold">
              My Task
            </button>
            <svg
              className="h-inherit self-center pt-1 w-[12px] ml-1 h-[12px] 2xl:w-[14px] 2xl:h-[14px] "
              viewBox="0 0 11 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.59795 0.912477L5.77295 4.72914L1.94795 0.912476L0.772949 2.08748L5.77295 7.08748L10.7729 2.08748L9.59795 0.912477Z"
                fill="#4F4F4F"
              />
            </svg>
          </div>
          <button onClick={showInputHandler} className="bg-bolt py-1 px-3 text-white text-[12px] 2xl:text-[16px] rounded">
            New Task
          </button>
          {showFillter ? (
            <ul className="z-[99] style-none absolute mt-8 font-bold rounded text-[12px] 2xl:text-[16px] divide-y-2 border-2 bg-white">
              <li className="cursor-pointer">
                <p className="pl-2 pr-16 py-1">Personal Errand</p>
              </li>
              <li className="cursor-pointer">
                <p className="pl-2 py-1">Urgent To-Do</p>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div ref={scrollRef} className="max-h-[400px] 2xl:max-h-[600px] overflow-y-auto">
        <TodoList show={showInput} />
      </div>
    </div>
  );
};

export default TodosMain;
