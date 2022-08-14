import React from "react";

export const ActivityTitle = ({ dataCy, title }) => {
  return (
    <div data-cy={dataCy} className="">
      <span className="leading-[54px] text-base md:text-4xl text-[#111111] font-body font-bold">
        {title}
      </span>
    </div>
  );
};
