import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  username: string;
}

interface Session {
  user: User;
  token: string;
}

interface AuthenticationProviderProps {
  children: ReactNode;
}

interface AuthenticationContextData {
  session: Session | null;
  saveSession: (session: Session) => void;
  deleteSession: () => void;
}

const AuthenticationContext = createContext<AuthenticationContextData>(
  {} as AuthenticationContextData
);

export const STORAGE_KEY = "@natrave:auth";

export const getAuthToken = () => {
  const session = getStorageSession();

  if (session) return session.token;

  return null;
};

const getStorageSession = () => {
  const storagedAuth = localStorage.getItem(STORAGE_KEY);

  if (storagedAuth) {
    return JSON.parse(storagedAuth);
  }

  return null;
};

export function AuthenticationProvider({
  children,
}: AuthenticationProviderProps): JSX.Element {
  const [session, setSession] = useState<Session | null>(() => {
    return getStorageSession();
  });

  const saveSession = useCallback((newSession: Session) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newSession));
    setSession(newSession);
  }, []);

  const deleteSession = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, "");
    setSession(null);
  }, []);

  return (
    <AuthenticationContext.Provider
      value={{ session, saveSession, deleteSession }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}

export function useAuthentication(): AuthenticationContextData {
  const context = useContext(AuthenticationContext);
  return context;
}
