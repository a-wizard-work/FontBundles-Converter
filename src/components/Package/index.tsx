import { FC, ReactElement } from "react";
import { Wrapper, IconWrapper, Title, Description } from "./styles";

interface IProps {
  icon: ReactElement;
  title: string;
  description: string;
}

const Package: FC<IProps> = ({ icon, title, description }) => {
  return (
    <Wrapper>
      <IconWrapper>{icon}</IconWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default Package;
