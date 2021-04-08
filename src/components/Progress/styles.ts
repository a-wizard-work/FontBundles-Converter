import styled from "styled-components";
import colors from "styles/colors";

export const Progress = styled.progress`
  flex-grow: 1;
  height: 5px;
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
