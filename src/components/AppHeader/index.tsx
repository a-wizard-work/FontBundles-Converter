import { FC, lazy } from "react";
import { Visible } from "components/Grid";
import LazyWrapper from "components/LazyWrapper";

const BigHeader = lazy(() => import("./BigHeader"));
const SmallHeader = lazy(() => import("./SmallHeader"));

const AppHeader: FC = () => {
  return (
    <LazyWrapper>
      <Visible xs sm>
        <SmallHeader/>
      </Visible>
      <Visible md lg>
        <BigHeader/>
      </Visible>
    </LazyWrapper>
  );
};

export default AppHeader;
