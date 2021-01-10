import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import Todo from "./Todo";

const Todos = () => {
  const { todos, setTodos, category } = useContext(TodoContext);
  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    let filtered = todos.filter((todo) => {
      switch (category) {
        case "All":
          return true;
        case "Completed":
          return todo.status === "done";
        case "Pending":
          return todo.status === "ip";
      }
    });
    setFilteredTodos(filtered);
  }, [category, todos]);

  const deleteTodo = (todoId) => {
    setTodos(todos.filter((t) => t.id !== todoId));
  };

  const updateDoneStatus = (todo) => {
    setTodos(
      todos.map((t) => {
        if (t.id === todo.id) {
          t.status = "done";
        }
        return t;
      })
    );
  };

  return (
    <ul>
      {filteredTodos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={(todo) => deleteTodo(todo.id)}
            updateDoneStatus={(todo) => updateDoneStatus(todo)}
          />
        );
      })}
    </ul>
  );
};

export default Todos;
