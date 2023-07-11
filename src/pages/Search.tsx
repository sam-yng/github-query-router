import React from "react";
import classNames from "classnames";
import { UserInput } from "../components/UserInput";

export const Search: React.FC = () => {
  return (
    <main>
      <h1
        className={classNames("text-4xl", "tracking-wider", "fade-in", "mt-8")}
      >
        Search for users across GitHub
      </h1>
      <p className={classNames("mt-2", "fade-in")}>Using Github REST API</p>
      <UserInput />
    </main>
  );
};
