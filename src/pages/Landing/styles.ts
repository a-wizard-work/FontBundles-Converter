import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PackageSectionWrapper = styled.div`
  margin: 7.15rem 0;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1023px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    margin: 3.85rem 0;
  }

  @media (max-width: 578px) {
    margin: 3.05rem 0;
  }
`;
