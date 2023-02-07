import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import TodoNewItem from "./TodoNewItem";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch("https://dummyjson.com/todos/user/1");
      const resJson = await response.json();
      setTodos(resJson.todos)
      console.log(resJson.todos)
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div className="2xl-mt-[22px]">
      <ul className="divide-y-2">

        {todos?.map((todo, idx) => (<TodoItem index={idx} key={idx} todo={todo.todo} status={todo.completed}/>))}
        <TodoNewItem/>
      </ul>
    </div>
  );
};

export default TodoList;
