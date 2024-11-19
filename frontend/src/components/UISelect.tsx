import { useState } from "react";
import { booksCategoryEnum } from "../enums/books.enum";

interface UISelectProps {
  label: string;
  options: string[];
  value: string;
  onValueChange: (value: booksCategoryEnum) => void;
}

export default function UISelect({
  options,
  label,
  onValueChange,
  value,
}: UISelectProps) {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
    onValueChange(e.target.value as booksCategoryEnum);
  };

  return (
    <>
      <div className="w-40">
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
        <select
          id="countries"
          className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
          value={selectedValue} // Set the selected value
          onChange={handleChange} // Handle change event
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
