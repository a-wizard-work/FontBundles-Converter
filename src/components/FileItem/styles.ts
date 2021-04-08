import styled from "styled-components";
import colors from "styles/colors";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 0.3rem;
  background: ${colors.lightGrey};
`;

export const FileDetailWrapper = styled.div`
  margin-left: 1rem;
  display: flex;
  align-items: left;
  flex-direction: column;

  h6 {
    margin: 0;
    font-family: "Proxima Nova";
    font-weight: normal;
    font-size: 0.8rem;
    line-height: 1.35rem;
    text-align: left;
    color: #212121;
  }

  p {
    margin: 0;
    font-family: "Proxima Nova";
    font-weight: normal;
    font-size: 0.8rem;
    line-height: 1.3rem;
    text-align: left;
    color: #7b7b7b;
  }
`;
