import { Session, User } from "@supabase/supabase-js";
import { PropsWithChildren, useEffect, useState } from "react";
import supabase from "../services/supabaseClient";
import { AuthContext } from "./contextTypes";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | undefined>(undefined);

  const getSession = async () => {
    const { data } = await supabase.auth.getSession();
    setSession(data.session);
  };

  useEffect(() => {
    setUser(session?.user);
  }, [session]);

  useEffect(() => {
    getSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ session, signOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};
