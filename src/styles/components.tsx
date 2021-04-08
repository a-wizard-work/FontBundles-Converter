import { Container } from "components/Grid";
import styled from "styled-components";
import colors from "styles/colors";

export const StyledContainer = styled(Container)`
  max-width: 68.625rem;
`;

export const HeaderText = styled.h3`
  font-family: Montserrat;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
  color: ${colors.primaryBlack};
  margin: 3.5rem 0 0.875rem 0;
`;

export const DescriptionText = styled.h3`
  font-family: "Proxima Nova";
  font-weight: normal;
  font-size: 1.14rem;
  line-height: 1.2825rem;
  text-align: center;
  color: ${colors.primaryBlack};
  margin: 0 0 2.3828rem 0;
`;
