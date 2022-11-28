import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

export const Button = ({ name }) => {
  return (
    <button className="h-10 px-8 rounded-full text-white-main bg-primary">
      <div className="flex flex-row">
        <AiOutlinePlus className="!text-white-main !my-auto" />
        <span className="ml-0.5">{`Add ${name}`}</span>
      </div>
    </button>
  );
};
