import React from "react";
import { ItemCard } from "../Card/ItemCard";

export const ItemList = ({
  listItem,
  getTodoItem,
  deleteItem,
  setItemTodo,
  openModal,
  updateItem,
}) => {
  return (
    <div className="grid grid-cols-1 lg:px-48 gap-3 p-4">
      {listItem.map((item, i) => (
        <div className="px-3" data-cy={`todo-item-${i}`} key={item.id}>
          <ItemCard
            item={item}
            updateItem={updateItem}
            removeItemTodo={deleteItem}
            setItemTodo={setItemTodo}
            openModal={openModal}
          />
        </div>
      ))}
    </div>
  );
};
