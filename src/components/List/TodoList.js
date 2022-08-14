import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { deleteTodo } from "../../api/todo-api";
import { TodoContext } from "../../context/TodoContext";
import { TodoCard } from "../Card/TodoCard";

export const TodoList = ({ list }) => {
  const { getTodo } = useContext(TodoContext);
  const removeTodo = (id) => {
    deleteTodo(id)
      .then((resp) => {
        getTodo();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 lg:px-48">
      {list.map((item, i) => (
        <div className="px-3 mt-8" data-cy={`activity-item-${i}`} key={item.id}>
          <Link to={`/detail/${item.id}`} state={item}>
            <TodoCard item={item} remove={removeTodo} />
          </Link>
        </div>
      ))}
    </div>
  );
};
