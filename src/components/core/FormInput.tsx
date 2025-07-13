import React from "react";
import type { FieldError } from "react-hook-form";

type FormInputProps = {
  label: string;
  error?: FieldError;
  type?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const FormInput: React.FC<FormInputProps> = ({
  label,
  error,
  type = "text",
  ...inputProps
}) => {
  const { name } = inputProps;

  return (
    <div className="w-full flex flex-col space-y-1">
      <div className="p-2 w-full border rounded-sm border-gray-300 flex items-center space-x-2">
        <label className="text-gray-400 whitespace-nowrap" htmlFor={name}>
          {label}
        </label>
        <input
          className="w-full outline-0 ring-0"
          id={name}
          type={type}
          {...inputProps}
        />
      </div>
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
};

export default FormInput;
