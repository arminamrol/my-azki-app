import React from "react";
import type { FieldError } from "react-hook-form";
import { classnames } from "../../utils/classNames";

export type SelectOption = {
  value: string | number;
  label: string;
};

type SelectProps = {
  label: string;
  options: SelectOption[];
  error?: FieldError;
  placeholder?: string;
  isSelected?: boolean;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

const Select: React.FC<SelectProps> = ({
  label,
  options,
  error,
  placeholder,
  isSelected,
  ...selectProps
}) => {
  const { name } = selectProps;

  return (
    <div className="w-full flex flex-col space-y-1">
      <div className="p-2 w-full border rounded-sm border-gray-300 flex items-center justify-between space-x-2">
        <label className="hidden" htmlFor={name}>
          {label}
        </label>
        <select
          className={classnames("w-full ring-0 outline-0 bg-transparent", {
            "text-gray-400": !isSelected,
          })}
          id={name}
          {...selectProps}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {error && <p className="error-message">{error.message}</p>}
    </div>
  );
};

export default Select;
