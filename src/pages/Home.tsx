import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  return (
    <main
      className={classNames(
        "h-screen",
        "flex",
        "flex-col",
        "justify-center",
        "items-center",
        "lg:h-[86vh]",
      )}
    >
      <h1 className={classNames("text-4xl", "tracking-wider", "fade-in")}>
        GitHub User Search
      </h1>
      <Link
        to="/search"
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
      </Link>
    </main>
  );
};
