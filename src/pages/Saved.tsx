import React from "react";
import classNames from "classnames";
import { SavedBox } from "../components/SavedBox";

export const Saved: React.FC = () => {
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
        View your saved users
      </h1>
      <p className={classNames("mt-2", "fade-in")}>Click the tick to unsave</p>
      <SavedBox />
    </main>
  );
};
