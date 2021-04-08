import styled from "styled-components";
import colors from "styles/colors";

export const ButtonWrapper = styled.div`
  background: ${colors.primaryPink};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.05rem 2.86rem;
  border-radius: 9999px;
  cursor: pointer;
  &:hover {
    background: ${colors.secondaryPink};
  }

  @media (max-width: 578px) {
    padding: 1.05rem 1.55rem;
    width: 100%;
  }
`;

export const ButtonText = styled.div`
  color: white;
  font-size: 1.05rem;
  font-family: "Proxima Nova";
  font-weight: bold;
  margin-right: 2.86rem;
  @media (max-width: 578px) {
    margin-right: 1rem;
  }
`;

export const IconButton = styled.div<{ disabled?: boolean }>`
  height: 1.05rem;
  margin-right: 1.45rem;
  opacity: ${(props) => (props.disabled ? "0.4" : "0.7")};
  cursor: pointer;
  &:hover {
    opacity: ${(props) => (props.disabled ? "0.4" : "1")};
  }
  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 578px) {
    margin-right: 1rem;
  }
`;

export const IconImage = styled.img`
  height: 1.05rem;
`;
