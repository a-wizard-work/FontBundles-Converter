import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #fafafa;
  padding-top: 32px;
`;

export const Content = styled.pre`
  max-width: 560px;
  padding: 16px;
  margin: 0 auto;

  & pre: {
    whitespace: pre-wrap;
  }
`;
