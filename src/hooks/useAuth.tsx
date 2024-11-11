import { useContext } from "react";
import { AuthContext } from "../providers/contextTypes";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("");
  }
  return context;
};
