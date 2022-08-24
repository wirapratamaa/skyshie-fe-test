import React from "react";
import Select from "react-select";
import { CustomOptionLabel } from "./CustomLabelOption";

export const SelectOption = ({ value, onChange, options }) => {
  const customStyles = {
    valueContainer: (base) => ({
      ...base,
      position: "relative",
      //   bottom: 5,
    }),
    dropdownIndicator: (base) => ({
      ...base,
      position: "relative",
      //   bottom: 4,
    }),
    clearIndicator: (base) => ({
      ...base,
      position: "relative",
      //   bottom: 4,
      left: 5,
      padding: 0,
      color: "#742b9e",
      ":hover": {
        color: "#742b9e",
      },
    }),
    indicatorSeparator: (base) => ({
      ...base,
      display: "none",
    }),
    control: (base) => ({
      ...base,
      borderRadius: "5px",
      boxShadow: "none",
      height: 52,
      minHeight: 52,
    }),
    placeholder: (base) => ({
      ...base,
      position: "relative",
      color: "#b7b7b7",
    }),
    input: (base) => ({
      ...base,
      position: "relative",
      bottom: 0,
      display: "flex",
      alignItems: "center",
      color: "grey",
    }),
    singleValue: (base) => ({
      ...base,
      position: "relative",
      bottom: 0,
      display: "flex",
      alignItems: "center",
      color: "grey",
    }),
    menu: (base) => ({
      ...base,
      color: "grey",
      zIndex: 5,
    }),
  };

  return (
    <Select
      options={options}
      formatOptionLabel={CustomOptionLabel}
      styles={customStyles}
      className="font-body"
      value={value}
      onChange={onChange}
      isSearchable={false}
      data-cy="modal-add-priority-item"
    />
  );
};
