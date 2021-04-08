import { FC, ReactNode } from "react";
import { CSSProperties } from "styled-components";
import { Button as Comp } from "./styles";

export interface IProps {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  rounded?: boolean;
  outlined?: boolean;
  color?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  onClick?: () => void;
  children: ReactNode;
  style?: CSSProperties;
}

const Button: FC<IProps> = ({
  variant = "primary",
  size = "medium",
  outlined = false,
  rounded = true,
  color,
  backgroundColor,
  hoverBackgroundColor,
  ...props
}) => {
  return (
    <Comp
      variant={variant}
      outlined={outlined}
      rounded={rounded}
      size={size}
      color={color}
      backgroundColor={backgroundColor}
      hoverBackgroundColor={hoverBackgroundColor}
      {...props}
    >
      <span>{props.children}</span>
    </Comp>
  );
};

export default Button;
