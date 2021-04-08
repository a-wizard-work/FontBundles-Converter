import { ConversionStatusEnum } from "enums/conversion.enum";
import { useContext } from "react";

import { HeaderText, DescriptionText } from "styles/components";
import { Wrapper } from "./styles";
import { STEPS } from "constants/conversion.constant";
import { FileConversionContext } from "contexts/FileConversionContext";

import FilesSection from "./components/FilesSection";
import DropzoneSection from "./components/DropzoneSection";
import StatusSection from "./StatusSection";
import PackageSection from "./PackageSection";
import DragAndDrop from "components/DragAndDrop";

const Landing = () => {
  const { conversionStatus, addFilesFromPC } = useContext(
    FileConversionContext
  );
  const step = STEPS.find((s) => s.status === conversionStatus);

  return (
    <DragAndDrop onDrop={addFilesFromPC}>
      <Wrapper>
        <HeaderText>{step && step.title}</HeaderText>
        <DescriptionText>{step && step.description}</DescriptionText>
        <StatusSection />
        <DropzoneSection />
        {conversionStatus !== ConversionStatusEnum.INIT && <FilesSection />}
        <PackageSection />
      </Wrapper>
    </DragAndDrop>
  );
};

export default Landing;
