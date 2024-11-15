import { Session } from "@supabase/supabase-js";
import { PropsWithChildren, useEffect, useState } from "react";
import supabase from "../services/supabaseClient";
import { AuthContext } from "./contextTypes";

const key = "sb-fzkesarohqaicntobnnq-auth-token";

function getStoredSession() {
  const item = localStorage.getItem(key);
  if (item) return JSON.parse(item);
}

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [session, setSession] = useState<Session | null>(getStoredSession());
  const isAuthenticated = !!session;

  const getSession = async () => {
    const { data } = await supabase.auth.getSession();
    setSession(data.session);
  };

  useEffect(() => {
    getSession();
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider
      value={{ session, setSession, isAuthenticated, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
