import { StyledContainer } from "styles/components";
import { Row, Col } from "components/Grid";
import ConversionStatus from "components/ConversionStatus";
import { useContext } from "react";
import { FileConversionContext } from "contexts/FileConversionContext";

const PackageSection = () => {
  const { conversionStatus, progress } = useContext(FileConversionContext);

  return (
    <StyledContainer fluid>
      <Row>
        <Col lg={12} md={12}>
          <ConversionStatus status={conversionStatus} progress={progress} />
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default PackageSection;
