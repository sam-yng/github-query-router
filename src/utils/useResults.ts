import { useQuery } from "@tanstack/react-query";
import { useHub } from "./useHub";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

async function fetchUsers(name: string) {
  const res = await fetch(`https://api.github.com/search/users?q=${name}`);
  return await res.json();
}

export const useResults = () => {
  const location = useLocation()
  const { valid, input, setUsers } = useHub();
  const userQuery = useQuery(["user", location], () => fetchUsers(input), {
    enabled: !!valid,
  });

  useEffect(() => {
    if (userQuery.status === "success") {
      setUsers(userQuery.data.items)
    }
  }, [userQuery.status, userQuery.data])

  const queryStatus = userQuery;

  return { queryStatus };
};