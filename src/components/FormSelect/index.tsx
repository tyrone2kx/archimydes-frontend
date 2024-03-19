import { useField } from "formik";
import React from "react";
import useBreakpointValue from "../../utils/useBreakpointValue/useBreakpointValue";

interface IProps {
  containerProps?: React.HTMLProps<HTMLDivElement>;
  name: string;
  type?: string;
  label?: string;
  placeholder?: string;
  id?: string;
  rightIcon?: React.ReactNode;
  required?: boolean;
  className?: string;
  disabled?: boolean;
  options: { label: string; value: string }[];
}

const FormSelect = ({
  containerProps,
  label,
  rightIcon,
  required,
  placeholder,
  disabled,
  className,
  options,
  ...rest
}: IProps) => {
  const [field, meta] = useField(rest);
  const fontSize = useBreakpointValue({
    base: "16px",
    md: "14px",
  });
  return (
    <div className={`${className} mb-6`} {...containerProps}>
      {label && (
        <p className="mb-1 text-xs text-[#707070] uppercase font-semibold">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </p>
      )}
      <div className="border w-full bg-[#ffffff] p-2 rounded-md">
        <select
          className="outline-none bg-[#ffffff] border-none focus:ring-0 w-full"
          style={{
            fontSize,
          }}
          //   placeholder={placeholder}
          disabled={disabled}
          {...field}
          {...rest}
        >
          {placeholder && <option value={""}>{placeholder}</option>}
          {options.map((item) => (
            <option value={item.value}>{item.label}</option>
          ))}
        </select>
        {rightIcon && <i className="ml-2 icon-search text-gray-500"></i>}
      </div>
      {meta.touched && meta.error ? (
        <div className="text-xs text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default FormSelect;
