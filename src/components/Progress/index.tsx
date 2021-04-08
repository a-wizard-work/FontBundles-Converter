import { FC } from "react";
import { Progress } from "./styles";

export interface IProps {
  value: number;
}

const ProgressBar: FC<IProps> = ({ value }) => {
  return <Progress value={value} max={100}></Progress>;
};

export default ProgressBar;
