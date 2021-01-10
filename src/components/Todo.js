const Todo = ({ todo, deleteTodo, updateDoneStatus }) => {
  return (
    <div>
      <span className={todo.status === "done" ? "completed-todo" : ""}>
        {todo.name}
      </span>
      <button onClick={() => updateDoneStatus(todo)}>Done</button>
      <button onClick={() => deleteTodo(todo)}>Delete</button>
    </div>
  );
};

export default Todo;
