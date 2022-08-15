import React from "react";
import { isEmpty } from "../../utils/utils";
import { ButtonAction } from "../ButtonAction";
import { SelectOption } from "../SelectOption";

export const AddModal = ({
  isOpen,
  close,
  value,
  handlePriority,
  handleTitleName,
  itemTitle,
  options,
  handleSubmit,
  dataCy = "modal-add",
  title = "Tambah List Item",
}) => {
  return (
    <div className={isOpen ? "block" : "hidden"}>
      <div
        tabIndex="-1"
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 md:h-full justify-center items-center flex bg-black/50"
        aria-modal="true"
        role="dialog"
        onClick={() => close()}
        data-cy={dataCy}
      >
        <div
          className="relative p-4 w-full max-w-3xl h-full md:h-auto"
          onClick={(e) => {
            e.preventDefault(e);
            e.stopPropagation(e);
          }}
        >
          <div className="relative bg-white rounded-lg shadow ">
            <div className="flex flex-row justify-between items-center border-b px-10 py-5">
              <div
                className="flex items-center space-x-3"
                data-cy={`${dataCy}-title`}
              >
                <span className="text-[18px] leading-9 font-body font-semibold">
                  {title}
                </span>
              </div>
              <div className="relative" data-cy={`${dataCy}-close-button`}>
                <button
                  type="button"
                  className=" text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
                  data-modal-toggle="popup-modal"
                  onClick={() => close()}
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
            </div>
            <div className="flex flex-col px-10 py-5">
              <label
                htmlFor="list-item-name"
                data-cy={`${dataCy}-name-title`}
                className="font-body text-[12px] font-semibold mb-2"
              >
                NAMA LIST ITEM
              </label>
              <input
                type="text"
                className="rounded-md border border-[#E5E5E5] placeholder:text-[16px] placeholder:text-[#A4A4A4] px-4 font-body h-[52px]"
                placeholder="Tambahkan nama list item"
                data-cy={`${dataCy}-name-input`}
                value={itemTitle}
                onChange={(e) => handleTitleName(e)}
              />
            </div>
            <div className="flex flex-col px-10 py-5">
              <label
                htmlFor="list-item-name"
                data-cy={`${dataCy}-priority-title`}
                className="font-body text-[12px] font-semibold mb-2"
              >
                PRIORITY
              </label>
              <div className="w-1/4" data-cy={`${dataCy}-priority-dropdown`}>
                <SelectOption
                  value={value}
                  onChange={handlePriority}
                  options={options}
                />
              </div>
            </div>
            <div className="flex justify-end px-10 py-5 border-t">
              <ButtonAction
                disabled={
                  itemTitle.length > 0 && !isEmpty(value) ? false : true
                }
                dataCy={`${dataCy}-save-button`}
                onClick={() => handleSubmit()}
              >
                <span className="text-white font-body text-[12px] md:text-[18px] font-bold leading-7">
                  Simpan
                </span>
              </ButtonAction>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
