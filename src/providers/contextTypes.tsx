import { Session } from "@supabase/supabase-js";
import { createContext, Dispatch, SetStateAction } from "react";

export type tAuthContex = {
  session: Session | null;
  signOut: () => Promise<void>;
  isAuthenticated: boolean;
  setSession: Dispatch<SetStateAction<Session | null>>;
};

export const AuthContext = createContext<tAuthContex>({
  session: null,
  signOut: async () => {},
  isAuthenticated: false,
  setSession: () => {},
});
