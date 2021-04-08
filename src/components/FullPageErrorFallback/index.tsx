import { FC } from "react";

import { Content, Wrapper } from "./styles";

const FullPageErrorFallback: FC<any> = ({ error }) => {
  return (
    <Wrapper>
      <Content>
        <p>An unexpected error occurred, please refresh the app.</p>
        <pre>{error?.message}</pre>
      </Content>
    </Wrapper>
  );
};

export default FullPageErrorFallback;
