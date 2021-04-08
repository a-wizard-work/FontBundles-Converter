import styled from "styled-components";
import colors from "styles/colors";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;

  @media (max-width: 578px) {
    margin-bottom: 32px;
  }
`;

export const IconWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 0.425rem;
  background: #fff;
  box-shadow: 0px 0.3rem 1.43rem rgba(33, 33, 33, 0.07);
  margin-bottom: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  font-family: "Proxima Nova";
  font-weight: 600;
  font-size: 1.143rem;
  line-height: 1.286rem;
  text-align: center;
  color: ${colors.primaryBlack};
  margin-bottom: 1.048rem;
`;

export const Description = styled.div`
  width: 15.488rem;
  height: 5.0515rem;
  font-family: Montserrat;
  font-weight: 400;
  font-size: 0.857rem;
  line-height: 1.286rem;
  text-align: center;
  color: ${colors.primaryBlack};
`;
