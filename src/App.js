import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import TodoPovider from "./context/TodoContext";
import Todo from "./page/Todo";
import TodoDetail from "./page/TodoDetail";

function App() {
  return (
    <>
      <Header />
      <TodoPovider>
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/detail/:id" element={<TodoDetail />} />
        </Routes>
      </TodoPovider>
    </>
  );
}

export default App;
