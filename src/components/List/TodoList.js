import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { deleteTodo } from "../../api/todo-api";
import { TodoContext } from "../../context/TodoContext";
import { TodoCard } from "../Card/TodoCard";
import { DeleteModal } from "../Modal/DeleteModal";
import { InformationModal } from "../Modal/InformationModal";

export const TodoList = ({ list }) => {
  const { getTodo } = useContext(TodoContext);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [itemTodo, setItemTodo] = useState({});
  const [mode, setMode] = useState("");
  const openModalDelete = () => {
    setIsOpenDelete(!isOpenDelete);
  };
  const removeTodo = (id) => {
    deleteTodo(id)
      .then((resp) => {
        setMode("success");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 lg:px-48">
      {list.map((item, i) => (
        <div className="px-3 mt-8" key={item.id}>
          <Link to={`/detail/${item.id}`} state={item}>
            <TodoCard
              item={item}
              remove={() => {
                openModalDelete();
                setMode("delete");
              }}
              setItemTodo={setItemTodo}
              dataCy={`activity-item-${i}`}
            />
          </Link>
        </div>
      ))}
      {mode === "delete" ? (
        <DeleteModal
          isOpen={isOpenDelete}
          close={openModalDelete}
          itemTodo={itemTodo}
          onClick={removeTodo}
        />
      ) : (
        <InformationModal
          isOpen={isOpenDelete}
          close={() => {
            getTodo();
            openModalDelete();
          }}
        />
      )}
    </div>
  );
};
