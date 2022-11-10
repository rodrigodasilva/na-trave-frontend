import { Navigate } from "react-router-dom";

import { useAuthentication } from "@/hooks/useAuthentication";

export interface AuthGuardProps {
  element: React.ReactElement;
  isProtected?: boolean;
}

export const AuthGuard = ({ element, isProtected = false }: AuthGuardProps) => {
  const { session } = useAuthentication();

  if (session?.user && !isProtected) {
    return <Navigate to="/" replace={true} />;
  }

  if (!session?.user && isProtected) {
    return <Navigate to="/" replace={true} />;
  }

  return element;
};
