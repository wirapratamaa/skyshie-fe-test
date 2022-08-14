import React from "react";
import { ActivityTitle } from "../components/ActivityTitle";
import { ButtonAction } from "../components/ButtonAction";

const TodoMenu = ({
  titleActivity,
  buttonTitle,
  addNew,
  btnDataCy,
  titleDataCy,
}) => {
  return (
    <div className="flex flex-row justify-between items-center mt-10 md:mx-52 mx-5">
      <ActivityTitle title={titleActivity} dataCy={titleDataCy} />
      <ButtonAction dataCy={btnDataCy} onClick={addNew}>
        <span>
          <img src="/img/icon-plus.svg" alt="" width={24} height={24} />
        </span>
        <span className="text-white font-body text-[12px] md:text-[18px] font-bold leading-7">
          {buttonTitle}
        </span>
      </ButtonAction>
    </div>
  );
};

export default TodoMenu;
