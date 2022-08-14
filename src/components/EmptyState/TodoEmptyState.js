import React from "react";

export const TodoEmptyState = ({ addNew }) => {
  return (
    <div
      data-cy="todo-empty-state"
      className="md:flex flex-col items-center justify-center text-center mt-10 md:mt-20"
      onClick={() => addNew()}
    >
      <img
        src="/img/todo-empty-state.svg"
        width={767}
        height={490}
        alt=""
        className="hidden md:block cursor-pointer"
      />
      <img
        src="/img/empty-state-mobile.svg"
        alt=""
        className="block md:hidden mx-auto w-full"
      />
      <span className="font-body md:hidden text-[16px] font-semibold">
        Buat list item pertamamu
      </span>
    </div>
  );
};
