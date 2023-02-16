import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import TodoNewItem from "./TodoNewItem";
import Loading from "../ui/Loading";

const TodoList = (props) => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [openDelete, setOpenDelete] = useState();
  const [isOpen, setIsOpen] = useState(false)
  const getTodos = async () => {
    setIsloading(true);
    try {
      const response = await fetch("https://dummyjson.com/todos/user/1");
      const resJson = await response.json();
      setTodos(resJson.todos);
      setIsloading(false);
    } catch (err) {
      console.log(err);
      setIsloading(false);
    }
  };

  const removeTodo = (id) => {
    // console.log(id)
    const newTodo = todos.filter(todo => todo.id !== id)
    setTodos(newTodo)
  }
 
  useEffect(() => {
    getTodos();
  }, []);
  const openDeleteHandler = (id) => {
    // console.log(id)
    setOpenDelete(id)
  }
  useEffect(()=> {
    if(openDelete) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  },[openDelete])

  const openHandler = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      {isLoading ? (
        <Loading text="Loading Task List ..." />
      ) : (
        <div className="2xl-mt-[22px]">
          <ul className="divide-y-2">
            {todos?.map((todo, idx) => (
              <TodoItem
                index={idx}
                key={idx}
                todo={todo}
                removeTodo={removeTodo}
                setOpenDelete={openDeleteHandler}
                openDelete={openDelete}
                isOpen={isOpen}
                openHandler={openHandler}
              />
            ))}
            {props.show && <TodoNewItem />}
          </ul>
        </div>
      )}
    </>
  );
};

export default TodoList;
