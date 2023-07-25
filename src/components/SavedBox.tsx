import React from "react";
import classNames from "classnames";
import { useSavedUsers, SavedUser } from "../utils/useSavedUsers";
import { UserItem } from "./UserItem";

export const SavedBox: React.FC = () => {
  const { savedUsers } = useSavedUsers();
  return (
    <>
      <main
        className={classNames(
          "h-[65vh]",
          "border",
          "border-white",
          "mt-8",
          "overflow-x-auto",
          "fade-in",
          "rounded-xl",
        )}
      >
        <article>
          {savedUsers?.map((item: SavedUser) => (
            <UserItem
              key={item.id}
              id={item.id}
              flagged={item.flagged}
              name={item.name}
              link={item.link}
            />
          ))}
        </article>
      </main>
    </>
  );
};
