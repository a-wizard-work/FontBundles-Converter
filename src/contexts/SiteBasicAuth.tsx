import { createContext, FC, useContext, useState } from "react";
import Cookies from "universal-cookie";

export interface ISiteBasicAuthContext {
  setAuthenticated: (val: boolean) => void;
  authenticated: boolean;
}

export const SiteBasicAuthContext = createContext<ISiteBasicAuthContext>(
  {} as ISiteBasicAuthContext
);

export const COOKIE_NAME = "NEW_AUTH_COOKIE";

export const SiteBasicAuthProvider: FC = ({ children }) => {
  const cookies = new Cookies();
  const [authenticated, setAuthenticated] = useState(
    cookies.get(COOKIE_NAME) === "ok"
  );

  return (
    <SiteBasicAuthContext.Provider value={{ setAuthenticated, authenticated }}>
      {children}
    </SiteBasicAuthContext.Provider>
  );
};

export const useSiteBasicAuth = (): ISiteBasicAuthContext => {
  const context = useContext(SiteBasicAuthContext);
  if (context === undefined) {
    throw new Error(
      "useSiteBasicAuth hook must be used within a SiteBasicAuthProvider component"
    );
  }
  return context;
};
