import { ReactElement } from "react";
import App from "./App";
import ScrollTop from "components/ScrollTop";

const AppProviders = (): ReactElement => {
  return (
    <>
      <ScrollTop />
      <App />
    </>
  );
};

export default AppProviders;
