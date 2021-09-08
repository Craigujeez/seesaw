import React from 'react';
import Select from 'react-select'

const customStyles = {
    control: (provided, state) => ({
      ...provided,
      height: "46px",
      border: "1px solid #E4EAF0",
      padding: "5px",
      background: "transparent",
      transitionDuration: "300ms",
      transitionProperty: "box-shadow",
      transitionTimingFunction: "cubic-bezier(0.4,0,1,1)",
      "focus:": { background: "transparent" },
      boxShadow: "none",
    }),
    // valueContainer: (provided) => ({
    //   ...provided,
    //   paddingTop: '0.25rem',
    //   paddingBottom: '0.05rem',
    // }),
    placeholder: (provided) => ({
      ...provided,
      color: "#02003B",
      fontSize: '1rem',
    }),
    dropdownIndicator: (provided) => ({ ...provided, color: "#839AB0" }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none"
    }),
    singleValue: (provided) => ({ ...provided, overflow: "unset" }),
    menu: (provided) => ({ ...provided, background: "#FFFFFF" }),
    option: (provided, state) => ({
      ...provided,
      //   ':active': { backgroundColor: "blue" },
      ":hover": { opacity: "0.5" },
      backgroundColor: "#FFFFFF",
      color: state.isSelected ? "inherit" : "inherit",
    }),
  };

const InputSelect = ({ label, options, ...otherProps }) => {
    return (
      <div
        className={`w-full ${
        otherProps.disabled && "cursor-not-allowed bg-gray-50"
        }`}>
          <Select
            id={otherProps.name}
            options={options}
            defaultValue={
              otherProps.value
                ? { label: otherProps.value, value: otherProps.value }
                : otherProps.placeholder
            }
            name={otherProps.name}
            styles={customStyles}
            placeholder={otherProps.value ? "" : otherProps.placeholder}
            onChange={otherProps.handleChange}
            isDisabled={otherProps.disabled}
            isLoading={otherProps.loading}
          />
        </div>
    );
  };
 
export default InputSelect;
