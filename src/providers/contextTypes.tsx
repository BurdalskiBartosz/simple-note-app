import { Session, User } from "@supabase/supabase-js";
import { createContext } from "react";

type tAuthContex = {
  session: Session | null;
  user: User | undefined;
  signOut: () => void;
};

export const AuthContext = createContext<tAuthContex>({
  user: undefined,
  session: null,
  signOut: () => {},
});
