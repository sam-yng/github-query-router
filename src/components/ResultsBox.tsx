/* eslint-disable indent */
import React from "react";
import classNames from "classnames";
import { UserItem } from "./UserItem";
import { GithubUser } from "../utils/@types.user";
import { useGithubSearchResults } from "../utils/useResults";

export const ResultsBox: React.FC = () => {
  const { users, isError, fetchStatus, isLoading } = useGithubSearchResults();

  if (isError) {
    return <p className="text-xl text-red-400">Something went wrong</p>;
  }

  const shouldShowLoadingState = fetchStatus !== "idle" && isLoading;

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
        {shouldShowLoadingState && (
          <p className="my-4 mx-4 text-xl">Loading Users...</p>
        )}
        {users.length > 0 && (
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
