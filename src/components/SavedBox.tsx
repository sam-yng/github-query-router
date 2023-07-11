import React from "react";
import classNames from "classnames";
import { useHub } from "../utils/HubContext";
import { UserItem } from "./UserItem";

export const SavedBox: React.FC = () => {
  const { users } = useHub();
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
          {users
            .filter((item) => item.flagged === true)
            .map((item) => (
              <UserItem
                key={item.id}
                id={item.id}
                flagged={item.flagged}
                name={item.login}
                link={item.html_url}
              />
            ))}
        </article>
      </main>
    </>
  );
};
