/* eslint-disable indent */
import React, { useCallback, useMemo, useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import check from "../assets/icons/checkmark.png";
import flag from "../assets/icons/flag.png";
import greenflag from "../assets/icons/flag-green.png";
import { SavedUser, useSavedUsers } from "../utils/useSavedUsers";

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
  const { addUser, removeUser } = useSavedUsers();

  const onMouseEnter = () => setIsHovering(true);
  const onMouseLeave = () => setIsHovering(false);

  const onClickSaveUser = useCallback(() => {
    if (!flagged) {
      addUser({ name: name, id: id, link: link, flagged: true });
    } else if (flagged) {
      removeUser(id);
    }
  }, [id]);

  const iconSrc = useMemo(() => {
    if (isHovering) {
      return greenflag;
    }
    return flagged ? check : flag;
  }, [isHovering, flagged]);

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
        <img alt="icon" src={iconSrc} />
      </button>
    </article>
  );
};
