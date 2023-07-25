import React, { useState } from "react";
import classNames from "classnames";
import { ResultsBox } from "./ResultsBox";
import { Link } from "react-router-dom";

export const UserSearch: React.FC = () => {
  const [input, setInput] = useState<string>("");

  return (
    <>
      <div
        className={classNames(
          "flex",
          "flex-row",
          "mt-6",
          "justify-between",
          "fade-in",
          "bg-black",
        )}
      >
        <input
          onChange={(e) => setInput(e.target.value)}
          className={classNames(
            "border",
            "border-white",
            "w-full",
            "bg-black",
            "focus:outline-none",
            "px-2",
            "rounded-lg",
            "py-2",
            "focus:bg-white",
            "focus:text-black",
            "focus:border-black",
            "duration-300",
            "delay-50",
            "transition-colors",
          )}
        />
        <Link to={input}>
          <button
            className={classNames(
              "border",
              "border-white",
              "rounded-lg",
              "px-6",
              "ml-4",
              "hover:bg-white",
              "hover:text-black",
              "hover:border-black",
              "delay-50",
              "duration-300",
              "transition-colors",
              "h-full",
            )}
          >
            Search
          </button>
        </Link>
      </div>
      <ResultsBox />
    </>
  );
};
