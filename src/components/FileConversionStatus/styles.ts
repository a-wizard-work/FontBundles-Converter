import styled from "styled-components";
import colors from "styles/colors";

export const Wrapper = styled.div`
  padding: 1.25rem 1.9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 1.45rem 1.9rem rgba(8, 31, 77, 0.05);
  border-bottom: 1px solid ${colors.primaryBorderColor};

  @media (max-width: 864px) {
    flex-wrap: wrap;
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
  max-width: 40%;
  flex-basis: 40%;
  width: 40%;
  @media (max-width: 864px) {
    max-width: 100%;
    flex-basis: 100%;
    width: 100%;
    margin-bottom: 1rem;
  }

  @media (max-width: 578px) {
    flex-wrap: wrap;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 864px) {
    flex-grow: 1;
    justify-content: space-between;
  }

  @media (max-width: 578px) {
    flex-wrap: wrap;
  }
`;

export const ProgressBarWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 10rem;

  @media (max-width: 578px) {
    width: 100%;
    max-width: 100%;
    flex-basis: 100%;
    margin-top: 1rem;
  }
`;

export const DownloadButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 578px) {
    flex-wrap: wrap;
    width: 100%;
    max-width: 100%;
    flex-basis: 100%;
    a {
      margin-right: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }
`;

export const ButtonWrapper = styled.div`
  min-width: 7rem;

  @media (max-width: 578px) {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;
