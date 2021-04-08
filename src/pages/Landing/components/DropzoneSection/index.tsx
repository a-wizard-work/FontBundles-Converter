import { useContext } from "react";

import StyledImage from "components/StyledImage";
import DndArrow from "assets/images/dnd-arrow.png";
import Plant from "assets/images/plant.png";
import MainDrop from "assets/images/main-drop.png";
import { Visible } from "components/Grid";

import {
  CenterWrapper,
  DescriptionText,
  DnDArrowWrapper,
  DropzoneSectionWrapper,
  DropzoneWrapper,
  FileImportWrapper,
  Float,
  MainDropWrapper,
  PlantWrapper,
  StyledText,
} from "./styles";

import FileImportButton from "components/FileImportButton";
import { ConversionStatusEnum } from "enums/conversion.enum";
import { Col, Row } from "components/Grid";
import { StyledContainer } from "styles/components";
import { FileConversionContext } from "contexts/FileConversionContext";

const DropzoneSection = () => {
  const { conversionStatus, addFilesFromPC } = useContext(
    FileConversionContext
  );

  const renderBack = () => {
    return (
      <>
        {conversionStatus === ConversionStatusEnum.INIT ? (
          <>
            <DnDArrowWrapper>
              <StyledImage src={DndArrow} alt="drag-and-drop" />
            </DnDArrowWrapper>
            <MainDropWrapper>
              <StyledImage src={MainDrop} alt="main-drop" />
            </MainDropWrapper>
            <PlantWrapper>
              <StyledImage src={Plant} alt="plant" />
            </PlantWrapper>
            <Visible lg md>
              <Float shape="rectangle" top="2rem" left="7rem" />
              <Float shape="circle" top="7rem" left="15rem" />
              <Float shape="rectangle" top="3rem" right="5rem" />
              <Float shape="circle" top="15rem" right="15rem" />
            </Visible>
            <Visible xs sm>
              <Float shape="rectangle" top="4rem" left="1rem" small />
              <Float shape="circle" top="9rem" left="15rem" small />
              <Float shape="rectangle" top="7rem" right="1rem" small />
              <Float shape="circle" top="15rem" left="1.2rem" small />
            </Visible>
          </>
        ) : (
          <>
            <Visible lg md>
              <Float shape="rectangle" top="2rem" left="7rem" />
              <Float shape="circle" top="5rem" left="15rem" />
              <Float shape="rectangle" top="3rem" right="5rem" />
              <Float shape="circle" top="6rem" right="15rem" />
            </Visible>
            <Visible xs sm>
              <Float shape="rectangle" top="2rem" left="7rem" small />
              <Float shape="circle" bottom="3rem" left="4rem" small />
              <Float shape="rectangle" bottom="1rem" right="3rem" small />
            </Visible>
          </>
        )}
      </>
    );
  };

  return (
    <DropzoneSectionWrapper>
      <StyledContainer fluid>
        <Row>
          <Col lg={12} md={12}>
            <DropzoneWrapper conversionStatus={conversionStatus}>
              {renderBack()}
              <FileImportWrapper>
                <CenterWrapper>
                  <FileImportButton onImport={addFilesFromPC} />
                  <StyledText>
                    Drop files here. 100 MB maximum file size
                  </StyledText>
                </CenterWrapper>
              </FileImportWrapper>
            </DropzoneWrapper>
          </Col>
        </Row>
      </StyledContainer>
      {conversionStatus === ConversionStatusEnum.INIT && (
        <DescriptionText>
          By using this tool you are agreeing to the Terms & Conditions of
          Conversion here.
        </DescriptionText>
      )}
    </DropzoneSectionWrapper>
  );
};

export default DropzoneSection;
