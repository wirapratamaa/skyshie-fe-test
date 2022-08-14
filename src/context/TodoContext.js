import { createContext, useCallback, useEffect, useState } from "react";
import { addTodo, getTodoList } from "../api/todo-api";

export const TodoContext = createContext();

const TodoPovider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTodo = useCallback(() => {
    setLoading(true);
    getTodoList()
      .then((resp) => {
        setLoading(false);
        if (resp.data.data) {
          setTodoList(resp.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addNewTodo = () => {
    const payload = {
      email: "wirapratama758@gmail.com",
      title: "New Activity",
    };
    addTodo(payload)
      .then((resp) => {
        getTodo();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getTodo();
  }, [getTodo]);
  return (
    <TodoContext.Provider value={{ todoList, addNewTodo, loading, getTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoPovider;
