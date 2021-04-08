import { FC } from "react";

import { ReactComponent as HeaderBg } from "assets/icons/header-bg.svg";
import { Wrapper } from "./styles";

const BigHeader: FC = () => {
  return (
    <Wrapper>
      <HeaderBg />
    </Wrapper>
  );
};

export default BigHeader;
