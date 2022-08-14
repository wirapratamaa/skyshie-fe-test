import React from "react";

export const ButtonAction = ({
  dataCy,
  children,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className={`flex flex-row justify-center items-center py-[13px] pr-[21px] pl-[13px] ${
        disabled ? "bg-primary/20" : "bg-primary"
      } rounded-full h-14 gap-1.5 w-[159px]`}
      data-cy={dataCy}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
