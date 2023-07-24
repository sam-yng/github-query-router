import React from "react";
import classNames from "classnames";
import { UserItem } from "./UserItem";
import { useGithubSearchResults } from "../utils/useResults";

export const SavedBox: React.FC = () => {
  const { users } = useGithubSearchResults();

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
            ?.filter((item) => item.flagged === true)
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
