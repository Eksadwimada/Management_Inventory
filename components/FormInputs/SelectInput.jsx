import React from "react";

export default function SelectInput({ label, name, register, className = "sm:col-span-2", options = [] }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <select {...register(name)} id={name} name={name} className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500" defaultValue="">
          {/* Placeholder option */}
          {options.map((option, i) => (
            <option key={i} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
