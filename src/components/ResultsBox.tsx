/* eslint-disable indent */
import React, { useEffect } from "react";
import classNames from "classnames";
import { UserItem } from "./UserItem";
import { useNavigate } from "react-router-dom";
import { useHub } from "../utils/useHub";
import { HubUser } from "../utils/@types.user";
import { useResults } from "../utils/useResults";

export const ResultsBox: React.FC = () => {
  const { setInput, users } = useHub();
  const { queryStatus } = useResults();
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/search");
  }, []);

  if (queryStatus.isError) {
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
        {queryStatus.fetchStatus === "idle" &&
        queryStatus.isLoading ? null : queryStatus.isLoading ? (
          <p className="my-4 mx-4 text-xl">Loading Users...</p>
        ) : (
          <article>
            {users?.map((item: HubUser) => (
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
