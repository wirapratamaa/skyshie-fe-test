import React, { useContext } from "react";
import { ActivityEmptyState } from "../components/EmptyState/ActivityEmptyState";
import { TodoList } from "../components/List/TodoList";
import TodoMenu from "../components/TodoMenu";
import { TodoContext } from "../context/TodoContext";

const Todo = () => {
  const { addNewTodo, todoList } = useContext(TodoContext);

  return (
    <div>
      <TodoMenu
        titleActivity={"Activity"}
        buttonTitle={"Tambah"}
        addNew={addNewTodo}
        btnDataCy={"activity-add-button"}
        titleDataCy={"activity-title"}
      />
      <div data-cy="activity-item">
        {todoList.length > 0 ? (
          <TodoList list={todoList} />
        ) : (
          <ActivityEmptyState addNew={addNewTodo} />
        )}
      </div>
    </div>
  );
};

export default Todo;
