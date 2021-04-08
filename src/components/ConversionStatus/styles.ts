import styled from "styled-components";
import colors from "styles/colors";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const Circle = styled.div<{ active: boolean }>`
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 50%;
  background-color: ${(props) =>
    props.active ? colors.primaryPink : colors.white};
  border: 2px solid
    ${(props) => (props.active ? colors.primaryPink : colors.midGrey)};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 1.45rem;
  text-align: center;
  color: ${(props) => (props.active ? colors.white : colors.midGrey)};
`;

export const Progress = styled.progress`
  flex-grow: 1;
  height: 2px;
  background-color: ${colors.midGrey};
  border: none;

  -webkit-appearance: none;
  appearance: none;

  &::-webkit-progress-bar {
    background-color: ${colors.midGrey};
  }

  &::-webkit-progress-value {
    background-color: ${colors.primaryPink};
  }

  &::-moz-progress-bar {
    background-color: ${colors.primaryPink};
    border-radius: 5px;
  }
`;
