import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { GithubUser } from "./@types.user";

async function fetchUsers(userQuery: string) {
  const res = await fetch(`https://api.github.com/search/users?q=${userQuery}`);
  const response = await res.json();
  return response.items as GithubUser[];
}

export const useGithubSearchResults = () => {
  const { userQuery } = useParams<{ userQuery: string}>()

  const { data, isError, status, fetchStatus, isLoading } = useQuery(
    ["user", userQuery],
    () => userQuery ? fetchUsers(userQuery) : [],
    {
      enabled: Boolean(userQuery),
      select: (data: GithubUser[]) => data.map((user) => user)
    }
  );

  return { users: data ?? [], isError, status, fetchStatus, isLoading };
};