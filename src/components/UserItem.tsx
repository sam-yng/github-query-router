/* eslint-disable indent */
import React, { useCallback, useMemo, useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import check from "../assets/icons/checkmark.png";
import flag from "../assets/icons/flag.png";
import greenflag from "../assets/icons/flag-green.png";
import { useSavedUsers } from "../utils/useSavedUsers";

type UserItemProps = {
  avatar?: string;
  name: string;
  link: string;
  id: number;
};

export const UserItem: React.FC<UserItemProps> = ({
  name,
  link,
  id,
}: UserItemProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const { savedUsers, addUser, removeUser } = useSavedUsers();

  const onMouseEnter = () => setIsHovering(true);
  const onMouseLeave = () => setIsHovering(false);

  const isSaved = useMemo(() => {
    return savedUsers.some((user) => user.id === id);
  }, [id, savedUsers]);

  const onClickSaveUser = useCallback(() => {
    if (!isSaved) {
      addUser({ name: name, id: id, link: link });
    } else if (isSaved) {
      removeUser(id);
    }
  }, [id, name, link, isSaved, addUser, removeUser]);

  const iconSrc = useMemo(() => {
    if (isHovering) {
      return greenflag;
    }
    return isSaved ? check : flag;
  }, [isHovering, isSaved]);

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
        className={classNames(
          "hover:text-green-500",
          "hover:cursor-pointer",
          "mr-6",
          "md:mr-0",
        )}
      >
        {name}
      </h1>
      <Link className={classNames("mr-6", "md:mr-0")} target="blank" to={link}>
        <h1 className={classNames("hover:text-green-500")}>{link}</h1>
      </Link>
      <button
        onClick={onClickSaveUser}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={classNames("md:w-6", "md:h-6", "w-5", "h-5")}
      >
        <img alt="icon" src={iconSrc} />
      </button>
    </article>
  );
};
