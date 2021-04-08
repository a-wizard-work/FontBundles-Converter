import styled from "styled-components";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Switch } from "react-router";
import { createElement, lazy, ReactElement, ReactNode } from "react";
import { FC } from "react";
import { Box } from "react-basic-blocks";

const AppHeader = lazy(() => import("components/AppHeader"));
const Footer = lazy(() => import("components/Footer"));
const FAQ = lazy(() => import("pages/FAQ"));
const Landing = lazy(() => import("pages/Landing"));
const FullPageErrorFallback = lazy(
  () => import("components/FullPageErrorFallback")
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  .max-width-container {
    align-self: center;
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
  }
`;

interface ILayoutProps {
  children?: ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
}

// eslint-disable-next-line no-console
const addLogger = (error: any) => console.log(error);

const Layout: FC<ILayoutProps> = ({
  children,
  showHeader = true,
  showFooter = true
}): ReactElement => {
  return (
    <ErrorBoundary
      FallbackComponent={FullPageErrorFallback}
      onError={(error: any) => addLogger(error)}
    >
      <Wrapper>
        {showHeader && <AppHeader />}
        <div className="max-width-container">{children}</div>
        {showFooter && <Footer />}
      </Wrapper>
    </ErrorBoundary>
  );
};

const renderLayout = (component: FC, layoutProps?: ILayoutProps) => (
  routerProps: any
) => <Layout {...layoutProps}>{createElement(component, routerProps)}</Layout>;

const renderLandingLayout = (component: FC) => renderLayout(component);

const App = (): ReactElement => {
  return (
    <Switch>
      <Route path="/" render={renderLandingLayout(Landing)} exact />
      <Route path="/faq" render={renderLandingLayout(FAQ)} exact />
      <Route render={() => <Box padding="20px">Not found</Box>} />
    </Switch>
  );
};

export default App;
