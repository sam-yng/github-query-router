/* eslint-disable indent */
import React, { useCallback, useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import check from "../assets/icons/checkmark.png";
import flag from "../assets/icons/flag.png";
import greenflag from "../assets/icons/flag-green.png";
import { useResults } from "../utils/useResults";
import { GithubUser } from "../utils/@types.user";

type UserItemProps = {
  avatar?: string;
  name: string;
  link: string;
  flagged: boolean;
  id: number;
};

export const UserItem: React.FC<UserItemProps> = ({
  name,
  link,
  flagged,
  id,
}: UserItemProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const { users, setUsers } = useResults();

  const onMouseEnter = () => setIsHovering(true);
  const onMouseLeave = () => setIsHovering(false);

  const onClickSaveUser = useCallback(() => {
    const updatedUsers = users?.map((item: GithubUser) =>
      item.id === id ? { ...item, flagged: !item.flagged } : item,
    );
    setUsers(updatedUsers);
    console.log(users[0].flagged);
  }, [users, id, flagged, setUsers]);

  return (
    <article
      className={classNames(
        "flex",
        "flex-row",
        "text-white",
        "text-xl",
        "my-4",
        "mx-4",
        "items-center",
        "justify-between",
      )}
    >
      <h1
        className={classNames("hover:text-green-500", "hover:cursor-pointer")}
      >
        {name}
      </h1>
      <Link target="blank" to={link}>
        <h1 className={classNames("hover:text-green-500")}>{link}</h1>
      </Link>
      <button
        onClick={onClickSaveUser}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={classNames("w-6", "h-6")}
      >
        <img alt="icon" src={isHovering ? greenflag : flagged ? check : flag} />
      </button>
    </article>
  );
};
