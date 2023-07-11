import React from "react";
import classNames from "classnames";
import { ResultsBox } from "./ResultsBox";
import { useHub } from "../utils/HubContext";
import { Link } from "react-router-dom";

export const UserInput: React.FC = () => {
  const { setInput, input, setValid } = useHub();

  const updateInput = (e: { target: { value: string } }) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    input.length > 0 ? setValid(true) : setValid(false);
  };

  return (
    <>
      <main
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
          onChange={updateInput}
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
        ></input>
        <Link to={`${input}`}>
          <button
            onClick={handleClick}
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
      </main>
      <ResultsBox />
    </>
  );
};
