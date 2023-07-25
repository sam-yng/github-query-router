import React from "react";
import classNames from "classnames";
import { UserSearch } from "../components/UserSearch";

export const Search: React.FC = () => {
  return (
    <main className={classNames("px-6", "h-screen", "md:h-full")}>
      <h1
        className={classNames(
          "text-4xl",
          "tracking-wider",
          "fade-in",
          "md:mt-8",
          "mt-4",
        )}
      >
        Search for users across GitHub
      </h1>
      <p className={classNames("mt-2", "fade-in")}>Using Github REST API</p>
      <UserSearch />
    </main>
  );
};
