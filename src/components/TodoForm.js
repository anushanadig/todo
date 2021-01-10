import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoForm = () => {
  const { todoName, setTodoName, todos, setTodos, setCategory } = useContext(
    TodoContext
  );

  const onInputChange = (e) => {
    setTodoName(e.target.value);
  };

  const onTodoSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { id: todos.length + 1, name: todoName, status: "ip" },
    ]);
    setTodoName("");
  };

  return (
    <form onSubmit={onTodoSubmit}>
      <input type="text" value={todoName} onChange={onInputChange} />
      <button>Add</button>
      <select
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      >
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
      </select>
    </form>
  );
};

export default TodoForm;
