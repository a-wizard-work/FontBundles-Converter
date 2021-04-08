import { ConversionStatusEnum } from "enums/conversion.enum";
import styled from "styled-components";
import colors from "styles/colors";

export const DropzoneSectionWrapper = styled.div`
  margin: 4rem 0 0 0;
  position: relative;
  @media (max-width: 578px) {
    margin: 2rem 0 0 0;
  }
`;

export const DropzoneWrapper = styled.div<{
  conversionStatus: ConversionStatusEnum;
}>`
  position: relative;
  overflow: ${(props) =>
    props.conversionStatus !== ConversionStatusEnum.INIT
      ? "hidden"
      : "initial"};
  border: ${(props) =>
    props.conversionStatus === ConversionStatusEnum.INIT
      ? "none;"
      : `2px dashed ${colors.midGrey};`}
  border-radius: 5px;
  background: ${(props) =>
    props.conversionStatus === ConversionStatusEnum.INIT
      ? "none;"
      : `${colors.lighterGrey};`}
  padding: ${(props) =>
    props.conversionStatus !== ConversionStatusEnum.INIT ? "1.525rem 0;" : ";"}
  ${(props) =>
    props.conversionStatus !== ConversionStatusEnum.INIT &&
    `
    display: flex;
    align-items: center;
    justify-content: center;
  `}

  @media (max-width: 578px) {
    padding: ${(props) =>
      props.conversionStatus !== ConversionStatusEnum.INIT ? "7rem 0;" : "0;"}
  }
`;

export const Float = styled.span<{
  shape: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  small?: boolean;
}>`
  position: absolute;
  width: ${(props) => (props.small ? "0.7rem" : "0.95rem")};
  height: ${(props) => (props.small ? "0.7rem" : "0.95rem")};
  z-index: 1;
  border: 2px solid ${colors.primaryBlack};
  top: ${(props) => props.top || ""};
  left: ${(props) => props.left || ""};
  right: ${(props) => props.right || ""};
  bottom: ${(props) => props.bottom || ""};
  ${(props) => props.shape === "circle" && "border-radius: 0.47rem;"}
  transform: rotate(45deg);
`;

export const MainDropWrapper = styled.div`
  width: 40%;
  margin: auto;
  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 578px) {
    width: 95%;
  }
`;

export const DnDArrowWrapper = styled.div`
  position: absolute;
  width: 16.49rem;
  top: 40%;
  left: 0;
  transform: translate(0, -50%);
  @media (max-width: 768px) {
    top: 10%;
  }

  @media (max-width: 578px) {
    width: 50%;
  }
`;

export const PlantWrapper = styled.div`
  position: absolute;
  width: 18.729rem;
  top: 50%;
  left: 80%;
  transform: translate(0, -50%);
  z-index: -1;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const FileImportWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  z-index: 1;
  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 0;
  }

  @media (max-width: 578px) {
    width: 100%;
  }
`;

export const CenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 578px) {
    width: 100%;
  }
`;

export const StyledText = styled.p`
  margin: 0.65rem 0 0;
  font-familly: "Proxima Nova";
  font-size: 0.85rem;
  line-height: 1.28rem;
  color: ${colors.primaryBlack};
`;

export const DescriptionText = styled.h4`
  font-family: Montserrat;
  font-weight: normal;
  font-size: 0.8578rem;
  line-height: 1.2867rem;
  text-align: center;
  color: ${colors.grey};
  margin: 0;

  @media (max-width: 768px) {
    margin-top: 24px;
  }
`;
