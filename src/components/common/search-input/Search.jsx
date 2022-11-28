import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useAsyncDebounce } from "react-table";

export const Search = ({ filter, setFilter }) => {
  /**
   * states
   */
  const [value, setValue] = useState(filter);

  /**
   * selectors
   */

  /**
   * functions
   */
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 400);

  /**
   * effects
   */

  /**
   * destructured variables
   */

  return (
    <div className="flex gap-5 bg-white-main pl-4 w-2/6 py-3 rounded-full shadow-sm">
      <div className="relative text-dark-light focus-within:text-dark-light">
        <span className="absolute inset-y-0 left-0 flex items-center text-dark-light">
          <BiSearch />
        </span>
      </div>
      <input
        placeholder="Search"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        className={"w-3/4 focus:outline-none"}
      />
    </div>
  );
};
