import React from "react";

export const DeleteModal = ({
  isOpen,
  close,
  itemTodo,
  onClick,
  activity = "activity",
}) => {
  return (
    <div className={isOpen ? "block" : "hidden"}>
      <div
        tabIndex="-1"
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 md:h-full justify-center items-center flex bg-black/50"
        aria-modal="true"
        role="dialog"
        onClick={() => close()}
        data-cy="modal-delete"
      >
        <div
          className="relative p-4 w-full max-w-lg h-full md:h-auto"
          onClick={(e) => {
            e.preventDefault(e);
            e.stopPropagation(e);
          }}
        >
          <div className="relative bg-white rounded-lg shadow py-5">
            <div className="flex flex-col items-center px-10 py-5 space-y-4">
              <div className="" data-cy="modal-delete-icon">
                <img src="/img/delete-popup-icon.svg" alt="" />
              </div>
              <div className="text-center" data-cy="modal-delete-title">
                <span className="font-body">
                  Apakah anda yakin menghapus {activity}
                </span>
                <span className="font-body font-bold">
                  {` "${itemTodo.title}"`}?
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-around px-10">
              <button
                className="bg-[#F4F4F4] rounded-full w-[150px] p-3"
                data-cy="modal-delete-cancel-button"
                onClick={() => close()}
              >
                Batal
              </button>
              <button
                className="bg-[#ED4C5C] rounded-full w-[150px] p-3 text-white"
                data-cy="modal-delete-confirm-button"
                onClick={() => onClick(itemTodo.id)}
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
