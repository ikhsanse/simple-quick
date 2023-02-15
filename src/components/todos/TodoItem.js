import React, { useEffect, useState } from "react";
import Datepicker from "tailwind-datepicker-react";
import "./Todo.css";

const date = Date.now();
const today = new Date(date);

const options = {
  title: "",
  autoHide: true,
  todayBtn: false,
  clearBtn: false,
  maxDate: new Date("2030-01-01"),
  minDate: new Date("1950-01-01"),
  theme: {
    background: "",
    todayBtn: "",
    clearBtn: "",
    icons: "right-0",
    text: "leading-7",
    disabledText: "",
    input: "py-1 text-[11px] rounded pl-3 bg-white",
    inputIcon: "h-[11px] w-[11px] fill-white stroke-[black]",
    selected: "",
  },
  icons: {
    // () => ReactNode | JSX.Element
    prev: () => (
      <span>
        {" "}
        <svg
          className="mx-1 self-center rotate-90"
          width="11"
          height="8"
          viewBox="0 0 11 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.59795 0.912477L5.77295 4.72914L1.94795 0.912476L0.772949 2.08748L5.77295 7.08748L10.7729 2.08748L9.59795 0.912477Z"
            fill="#4F4F4F"
          />
        </svg>
      </span>
    ),
    next: () => (
      <span>
        <svg
          className="mx-1 self-center -rotate-90"
          width="11"
          height="8"
          viewBox="0 0 11 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.59795 0.912477L5.77295 4.72914L1.94795 0.912476L0.772949 2.08748L5.77295 7.08748L10.7729 2.08748L9.59795 0.912477Z"
            fill="#4F4F4F"
          />
        </svg>
      </span>
    ),
  },
  datepickerClassNames: "top-7 picker",
  defaultDate: today,
  language: "en",
};

const TodoItem = (props) => {
  const editDetail =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minimasapiente totam expedita";
  const [status, setStatus] = useState(props.todo.completed);
  const [show, setShow] = useState(false);
  const [expand, setExpand] = useState(false);
  const [editValue, setEditValue] = useState(`${props.todo.todo} - ${editDetail}`);
  const [openEdit, setOpenEdit] = useState(false);
  // const [openDelete, setOpenDelete] = useState(false);
  const handleChange = (date) => {
    //
  };
  const handleClose = () => {
    setShow(!show);
  };

  const handleStatus = () => {
    setStatus(!status);
  };
  const handleExpand = () => {
    setExpand(!expand);
  };
  useEffect(() => {
    if (props.index === 0 || props.index === 3) {
      setExpand(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const editHandler = (e) => {
    e.preventDefault();
    setEditValue(e.target.value);
  };

  // const openDeleteHandler = () => {
  //   setOpenDelete(!openDelete);
  // };

  const removeTodo = (id) => {
    props.removeTodo(id)
    props.setOpenDelete(undefined)
  }

  const openDeleteHandler = (id) => {
    props.setOpenDelete(id)
  }

  let expandContent;

  if (expand) {
    expandContent = (
      <div className="transition-all duration-500 h-auto">
        <div className="flex mt-3 relative">
          <div className="h-inherit self-center">
            <svg
              className="2xl:w-[12px] 2xl:h-[12px] w-[11px] h-[11px] fill-[#2F80ED] mr-3"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.99187 0.666687C4.39187 0.666687 0.66687 4.40002 0.66687 9.00002C0.66687 13.6 4.39187 17.3334 8.99187 17.3334C13.6002 17.3334 17.3335 13.6 17.3335 9.00002C17.3335 4.40002 13.6002 0.666687 8.99187 0.666687ZM9.00037 15.6667C5.31703 15.6667 2.3337 12.6834 2.3337 9.00002C2.3337 5.31669 5.31703 2.33335 9.00037 2.33335C12.6837 2.33335 15.667 5.31669 15.667 9.00002C15.667 12.6834 12.6837 15.6667 9.00037 15.6667ZM8.16687 4.83335H9.41687V9.20835L13.1669 11.4334L12.5419 12.4584L8.16687 9.83335V4.83335Z" />
            </svg>
          </div>
          <div className="text-[11px] date-picker">
            <Datepicker
              options={options}
              onChange={handleChange}
              show={show}
              setShow={handleClose}
            />
          </div>
        </div>
        <div className="flex mt-1">
          <div className="h-inherit self-center">
            <svg
              onClick={() => setOpenEdit(!openEdit)}
              className="w-[12px] h-[12px] fill-[#2F80ED] mr-3 cursor-pointer"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.2165 0C12.0082 0 11.7915 0.0833333 11.6332 0.241667L10.1082 1.76667L13.2332 4.89167L14.7582 3.36667C15.0832 3.04167 15.0832 2.51667 14.7582 2.19167L12.8082 0.241667C12.6415 0.075 12.4332 0 12.2165 0ZM9.21667 5.01667L9.98333 5.78333L2.43333 13.3333H1.66667V12.5667L9.21667 5.01667ZM0 11.875L9.21667 2.65833L12.3417 5.78333L3.125 15H0V11.875Z" />
            </svg>
          </div>
          <div className="w-full">
            {openEdit ? (
              <textarea
                onChange={editHandler}
                type="text"
                className=" w-3/4 leading-4 text-[11px] rounded border-slate-300"
                rows="2"
                value={editValue}
                placeholder={editValue}
              />
            ) : (
              <p className="2xl:text-[12px] text-[11px] max-w-[90%]">
                {editValue}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    expandContent = <div className="transition-all duration-500 h-[0px]"></div>;
  }
  return (
    <li className="py-3">
      <div className="flex justify-between">
        <div className="flex">
          <input
            onChange={handleStatus}
            type="checkbox"
            checked={status}
            className="2xl:w-[12px] 2xl:h-[12px] w-[11px] h-[11px] self-center mr-3 focus:ring-0 focus:outline-0"
            name=""
            id=""
          />
          <span
            className={`${
              status ? "line-through text-[#828282]" : "text-black font-bold"
            } 2xl:text-[12px] text-[11px]`}
          >
            {props.todo.todo}
          </span>
        </div>
        <div className="flex relative">
          <span className={`${status ? 'hidden' : 'flex'} 2xl:text-[12px] text-[11px] text-red-600 mx-1`}>
            2 Days Left
          </span>
          <span className="2xl:text-[12px] text-[11px] mx-1">2/2/2023</span>
          <svg
            onClick={handleExpand}
            className={`${
              expand ? "rotate-180" : ""
            } mx-1 self-center ease-in duration-200 cursor-pointer`}
            width="11"
            height="8"
            viewBox="0 0 11 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.59795 0.912477L5.77295 4.72914L1.94795 0.912476L0.772949 2.08748L5.77295 7.08748L10.7729 2.08748L9.59795 0.912477Z"
              fill="#4F4F4F"
            />
          </svg>
          <span
            onClick={()=>openDeleteHandler(props.todo.id)}
            className="text-[12px] mx-1 leading-[6px] select-none cursor-pointer"
          >
            ...
          </span>
          {props.openDelete === props.todo.id ? (
            <button
              onClick={() => removeTodo(props.todo.id)}
              // onClose={props.setOpenDelete(undefined)}
              className="absolute z-[9999] text-[12px] border-[1px] bg-white rounded py-1 pl-2 pr-5 text-[#EB5757] right-0 top-4"
            >
              Delete
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="ml-6 transition-all duration-500">{expandContent}</div>
    </li>
  );
};

export default TodoItem;
