import React, { createContext, useState } from "react";

export const TodoContext = createContext({});

const TodoContextProvider = ({ children }) => {
  const [todoName, setTodoName] = useState("");
  const [category, setCategory] = useState("All");
  const [todos, setTodos] = useState([]);

  return (
    <TodoContext.Provider
      value={{ todoName, setTodoName, todos, setTodos, category, setCategory }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
