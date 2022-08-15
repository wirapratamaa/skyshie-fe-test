import React from "react";

export const InformationModal = ({ isOpen, close }) => {
  return (
    <div className={isOpen ? "block" : "hidden"}>
      <div
        tabIndex="-1"
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 md:h-full justify-center items-center flex bg-black/50"
        aria-modal="true"
        role="dialog"
        onClick={() => close()}
        data-cy="modal-information"
      >
        <div className="flex flex-row justify-between p-4 w-full max-w-md h-auto bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div className="flex items-center space-x-3">
            <span className="" data-cy="modal-information-icon">
              <img src="/img/information-icon.svg" alt="" />
            </span>
            <span
              data-cy="modal-information-title"
              className="font-body font-semibold"
            >
              Activity berhasil dihapus
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
