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
        "py-6",
        "items-center",
        "px-10",
        "md:px-0",
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
        <Link to="/search">
          <h1>Search</h1>
        </Link>
        <Link to="/saved">
          <h1>Saved</h1>
        </Link>
      </div>
    </nav>
  );
};
