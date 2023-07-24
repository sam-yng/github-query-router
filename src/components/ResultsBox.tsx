/* eslint-disable indent */
import React from "react";
import classNames from "classnames";
import { UserItem } from "./UserItem";
import { GithubUser } from "../utils/@types.user";
import { useResults } from "../utils/useResults";

export const ResultsBox: React.FC = () => {
  const { isError, fetchStatus, isLoading } = useResults();
  const { users } = useResults();

  if (isError) {
    return <p className="text-xl text-red-400">Something went wrong</p>;
  }

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
        {fetchStatus === "idle" && isLoading ? null : isLoading ? (
          <p className="my-4 mx-4 text-xl">Loading Users...</p>
        ) : (
          <article>
            {users?.map((item: GithubUser) => (
              <UserItem
                key={item.id}
                id={item.id}
                flagged={item.flagged}
                name={item.login}
                link={item.html_url}
              />
            ))}
          </article>
        )}
      </main>
    </>
  );
};
