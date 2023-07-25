import { useEffect, useState } from "react"

const SAVED_USERS_KEY = "SAVED_USERS";

export type SavedUser = {
  id: number,
  name: string,
  link: string,
  flagged: boolean
}

export const useSavedUsers = () => {
  const [isInitalized, setIsInitialized] = useState(false);
  const [savedUsers, setSavedUsers] = useState<SavedUser[]>([ { name: "example", id: 2, flagged: true, link: "hello" }]);

  const addUser = (user: SavedUser) => {
    setSavedUsers((currentSavedUsers) => [...currentSavedUsers, user]);
  }

  const removeUser = (userId: number) => {
    setSavedUsers((currentSavedUsers) => currentSavedUsers.filter((user) => user.id !== userId))
  }

  useEffect(() => {
    if (isInitalized) {
      return
    }
    const storedValue = localStorage.getItem(SAVED_USERS_KEY);
    if (!storedValue) {
      setSavedUsers([]);
      setIsInitialized(true);
      return;
    }
    try {
      const storedUsers = JSON.parse(storedValue) as SavedUser[];
      setSavedUsers(storedUsers);
    } catch (err) {
      console.error(err);
      setSavedUsers([]);
    } finally {
      setIsInitialized(true);
    }
  }, [isInitalized]);

  useEffect(() => {
    localStorage.setItem(SAVED_USERS_KEY, JSON.stringify(savedUsers));
  }, [savedUsers]);

  return { savedUsers, addUser, removeUser };
}
