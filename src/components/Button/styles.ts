import styled from "styled-components";
import colors from "styles/colors";

const height = (variant: string): number => {
  switch (variant) {
    case "small":
      return 2.5;
    case "medium":
      return 3;
    case "large":
      return 4;
    default:
      return 4;
  }
};

const fontSize = (variant: string): number => {
  switch (variant) {
    case "small":
      return 1;
    case "medium":
      return 1.25;
    case "large":
      return 1.5;
    default:
      return 1.5;
  }
};

export const Button = styled.button<{
  variant: string;
  size: string;
  outlined: boolean;
  rounded: boolean;
  color?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
}>`
  border: ${(props) =>
    props.outlined
      ? `1px solid ${
          props.color
            ? props.color
            : props.variant === "primary"
            ? colors.primaryPink
            : colors.midGrey
        }`
      : "none"};
  outline: none;
  height: ${(props) => height(props.size)}rem;
  border-radius: ${(props) =>
    props.rounded ? height(props.size) / 2 : 0.3}rem;
  color: ${(props) =>
    props.color
      ? props.color
      : props.outlined
      ? colors.primaryBlack
      : colors.white};
  background-color: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : props.outlined
      ? "transparent"
      : colors.primaryPink};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${(props) =>
      props.hoverBackgroundColor
        ? props.hoverBackgroundColor
        : props.backgroundColor
        ? props.backgroundColor
        : props.outlined
        ? "transparent"
        : colors.secondaryPink};
  }

  span {
    font-family: "Proxima Nova";
    font-weight: bold;
    font-size: ${(props) => fontSize(props.size)}rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: baseline;

    svg {
      margin-left: 0.3rem;
      width: 0.75rem;
    }
  }

  @media (max-width: 578px) {
    width: 100%;
  }
`;
