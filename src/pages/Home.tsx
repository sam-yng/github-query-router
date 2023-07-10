import React from "react";
import classNames from "classnames";

export const Home: React.FC = () => {
  return (
    <main
      className={classNames(
        "h-[92vh]",
        "flex",
        "flex-col",
        "justify-center",
        "items-center",
      )}
    >
      <h1 className={classNames("text-4xl", "tracking-wider", "fade-in")}>
        GitHub User Search
      </h1>
      <button
        className={classNames(
          "border",
          "border-white",
          "px-4",
          "py-2",
          "rounded-lg",
          "mt-6",
          "mb-16",
          "hover:bg-white",
          "hover:text-black",
          "hover:border-black",
          "delay-100",
          "duration-300",
          "transition-colors",
          "fade-in",
        )}
      >
        Explore Now
      </button>
    </main>
  );
};
