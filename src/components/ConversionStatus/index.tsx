import { FC } from "react";

import { Circle, Progress, Wrapper } from "./styles";
import { ConversionStatusEnum } from "enums/conversion.enum";
export interface IProps {
  status: ConversionStatusEnum;
  progress: number;
}

const ConversionStatus: FC<IProps> = ({ status, progress = 0 }) => {
  return (
    <Wrapper>
      <Circle active={true}>1</Circle>
      <Progress value={progress} max={100}></Progress>
      <Circle active={status !== ConversionStatusEnum.INIT}>2</Circle>
    </Wrapper>
  );
};

export default ConversionStatus;
