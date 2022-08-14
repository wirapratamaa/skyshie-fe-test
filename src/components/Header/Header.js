import React from "react";

export const Header = () => {
  return (
    <div
      className="bg-primary h-16 md:h-[105px] flex items-center px-5 md:px-32 lg:px-52"
      data-cy="header-background"
    >
      <span
        className="text-white text-[18px] md:text-2xl font-body font-bold leading-7 md:leading-9"
        data-cy="header-title"
      >
        TO DO LIST APP
      </span>
    </div>
  );
};
