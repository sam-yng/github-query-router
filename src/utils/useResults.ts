import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { GithubUser } from "./@types.user";
import { useEffect, useMemo, useState } from "react";

async function fetchUsers(name: string) {
  const res = await fetch(`https://api.github.com/search/users?q=${name}`);
  return await res.json();
}

export const useResults = () => {
  const { id } = useParams()
  const [users, setUsers] = useState<GithubUser[]>([])

  const { data, isError, status, fetchStatus, isLoading } = useQuery(["user", location], () => fetchUsers(id as string), {
    enabled: !!id,
  });

  // const GithubUsers: GithubUser[] = data?.items.map(function(obj: typeof data){
  //   const updatedUser = { id: obj.id, flagged: false, login: obj.login, html_url: obj.html_url }
  //   return updatedUser
  // })

  useEffect(() => {
    status === "success" ? setUsers(data.items) : null
  }, [data, status])

  return { users, setUsers, isError, status, fetchStatus, isLoading };
};