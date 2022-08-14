import React from "react";
import { getClientTime } from "../../utils/utils";

export const TodoCard = ({ item, remove }) => {
  return (
    <div className="flex flex-col p-4 w-full h-[230px] bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5
        className="mb-2 text-[18px] font-body font-bold tracking-tight text-gray-900 dark:text-white"
        data-cy="activity-item-title"
      >
        {item.title}
      </h5>
      <div className="mt-auto flex justify-between items-center">
        <span
          className="text-[14px] font-body text-[#888888] leading-[18px]"
          data-cy="activity-item-date"
        >
          {getClientTime(item.created_at)}
        </span>
        <button
          data-cy="activity-item-delete-button"
          onClick={() => remove(item.id)}
        >
          <img src="/img/delete-icon.svg" alt="" />
        </button>
      </div>
    </div>
  );
};
