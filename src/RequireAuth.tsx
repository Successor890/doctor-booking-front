import { Navigate, useLocation } from "react-router-dom";
<<<<<<< HEAD
import type { ReactNode } from "react";
import { useAuth } from "./AuthContext";

type RequireAuthProps = {
  children: ReactNode;
};

export function RequireAuth({ children }: RequireAuthProps) {
=======
import { useAuth } from "./AuthContext";

export function RequireAuth({ children }: { children: JSX.Element }) {
>>>>>>> b47e675c9b8ef703254ebcb4a9a7ed0a58fe17ad
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
<<<<<<< HEAD

  return <>{children}</>;
=======
  return children;
>>>>>>> b47e675c9b8ef703254ebcb4a9a7ed0a58fe17ad
}
