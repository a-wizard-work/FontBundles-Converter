import { FC } from "react";

import { ReactComponent as FooterBg } from "assets/icons/footer-bg.svg";
import { Wrapper } from "./styles";

const Footer: FC = () => {
  return (
    <Wrapper>
      <FooterBg />
    </Wrapper>
  );
};

export default Footer;
