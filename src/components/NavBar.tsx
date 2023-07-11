import React from "react";
import classNames from "classnames";
import github from "../assets/images/thehub.png";
import { Link } from "react-router-dom";

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
      <Link to="/">
        <img
          className={classNames("h-10", "w-10")}
          alt="Github Logo"
          src={github}
        />
      </Link>
      <div className={classNames("flex", "flex-row", "space-x-10")}>
        <h1>Search</h1>
        <h1>Saved</h1>
      </div>
    </nav>
  );
};
