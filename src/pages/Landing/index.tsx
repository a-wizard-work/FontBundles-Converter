import { FileConversionProvider } from "contexts/FileConversionContext";

import LandingComponent from "./Landing";

const Landing = () => {
  return (
    <FileConversionProvider>
      <LandingComponent />
    </FileConversionProvider>
  );
};

export default Landing;
