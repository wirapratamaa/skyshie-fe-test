import React from "react";
import { findSelection, options } from "../../utils/utils";

export const ItemCard = ({
  item,
  updateItem,
  removeItemTodo,
  setItemTodo,
  openModal,
}) => {
  const handleChange = (e) => {
    let target = e.currentTarget.checked;
    const payload = {
      id: item.id,
      data: {
        is_active: target ? 0 : 1,
      },
    };
    updateItem(payload);
  };

  return (
    <div className="flex flex-row justify-between p-4 w-full h-auto bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div className="flex items-center space-x-3">
        <input
          checked={item.is_active === 1 ? false : true}
          id="primary-checkbox"
          type="checkbox"
          value={item.is_active}
          onChange={(e) => handleChange(e)}
          className="w-5 h-5 appearance-none checked:bg-primary bg-white border rounded border-gray-300 "
          data-cy="todo-item-checkbox"
        />
        <span
          className={
            "h-4 w-4 rounded-full " +
            findSelection(options, item.priority)?.className
          }
          data-cy="todo-item-priority-indicator"
        />
        <span
          className={`text-[14px] font-body text-[#888888] leading-[18px] ${
            item.is_active === 1 ? "" : "line-through"
          }`}
          data-cy="todo-item-title"
        >
          {item.title}
        </span>
        <button
          data-cy="todo-item-edit-button"
          onClick={() => {
            openModal();
            setItemTodo(item);
          }}
        >
          <img src="/img/edit.svg" alt="" />
        </button>
      </div>
      <button
        data-cy="todo-item-delete-button"
        onClick={() => {
          removeItemTodo();
          setItemTodo(item);
        }}
      >
        <img src="/img/delete-icon.svg" alt="" />
      </button>
    </div>
  );
};
