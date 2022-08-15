import React from "react";
import { updateTodoItem } from "../../api/todo-api";
import { ItemCard } from "../Card/ItemCard";

export const ItemList = ({
  listItem,
  getTodoItem,
  deleteItem,
  setItemTodo,
}) => {
  const updateItem = (payload) => {
    updateTodoItem(payload)
      .then((resp) => {
        getTodoItem(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="grid grid-cols-1 lg:px-48 gap-3 p-4">
      {listItem.map((item, i) => (
        <div className="px-3" data-cy={`todo-item-${i}`} key={item.id}>
          <ItemCard
            item={item}
            updateItem={updateItem}
            removeItemTodo={deleteItem}
            setItemTodo={setItemTodo}
          />
        </div>
      ))}
    </div>
  );
};
