import "./App.css";
import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";
import TodoContextProvider from "./context/TodoContext";

function App() {
  return (
    <TodoContextProvider>
      <TodoForm />
      <Todos />
    </TodoContextProvider>
  );
}

export default App;
