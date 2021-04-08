import { lazy } from "react";
import { hydrate, render } from "react-dom";

import { QueryClient, QueryClientProvider, setLogger } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";
import LazyWrapper from "components/LazyWrapper";
import GlobalStyles from "styles/global-styles";
import {
  SiteBasicAuthProvider,
  useSiteBasicAuth,
} from "contexts/SiteBasicAuth";
import PasswordProtection from "pages/SiteProtection";

const AppProviders = lazy(() => import("AppProviders"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

setLogger({
  // eslint-disable-next-line no-console
  log: console.log,
  warn: console.warn,
  error: (error) => {
    console.error(error);
  },
});

const Main = () => {
  const { authenticated } = useSiteBasicAuth();
  return (
    <>
      {authenticated ? (
        <Router>
          <AppProviders />
        </Router>
      ) : (
        <PasswordProtection />
      )}
    </>
  );
};

const AppContainer = () => {
  return (
    <LazyWrapper>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <SiteBasicAuthProvider>
          <Main />
        </SiteBasicAuthProvider>
      </QueryClientProvider>
    </LazyWrapper>
  );
};

const rootElement = document.getElementById("root");
if (rootElement?.hasChildNodes()) {
  hydrate(<AppContainer />, rootElement);
} else {
  render(<AppContainer />, rootElement);
}
