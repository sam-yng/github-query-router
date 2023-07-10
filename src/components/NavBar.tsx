import React from "react";
import classNames from "classnames";
import github from "../assets/images/thehub.png";

export const NavBar: React.FC = () => {
  return (
    <nav
      className={classNames(
        "w-full",
        "flex",
        "flex-row",
        "justify-between",
        "py-5",
        "items-center",
      )}
    >
      <img
        className={classNames("h-10", "w-10")}
        alt="Github Logo"
        src={github}
      />
      <div className={classNames("flex", "flex-row", "space-x-10")}>
        <h1>Search</h1>
        <h1>Saved</h1>
      </div>
    </nav>
  );
};
