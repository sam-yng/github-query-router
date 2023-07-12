import React, { createContext, useContext, useMemo, useState } from "react";
import { HubUser } from "./@types.user";

export type HubContextType = {
  input: string;
  setInput: (input: string) => void;
  valid: boolean;
  setValid: (valid: boolean) => void;
  users: HubUser[];
  setUsers: (users: HubUser[]) => void;
};

const HubContext = createContext<HubContextType | undefined>(undefined);

export const HubProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [input, setInput] = useState<string>("");
  const [valid, setValid] = useState<boolean>(false);
  const [users, setUsers] = useState<HubUser[]>([]);

  const value = useMemo(
    () => ({
      input,
      setInput,
      valid,
      setValid,
      users,
      setUsers,
    }),
    [input, setInput, valid, setValid, users, setUsers],
  );

  return <HubContext.Provider value={value}>{children}</HubContext.Provider>;
};

export const useHub = (): HubContextType => {
  const value = useContext(HubContext);
  if (!value) {
    throw new Error("useHub can only be called from within a HubProvider");
  }
  return value;
};
