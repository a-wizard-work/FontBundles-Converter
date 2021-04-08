import FileConversionStatus from "components/FileConversionStatus";
import { FC, useContext } from "react";
import { StyledContainer } from "styles/components";
import { FileConversionContext } from "contexts/FileConversionContext";
import { Box } from "react-basic-blocks";
import { isFinished } from "utils/file";

const FilesSection: FC = () => {
  const { items, cancelFile, updateProgress } = useContext(
    FileConversionContext
  );

  return (
    <StyledContainer fluid>
      <Box flexDirection="column-reverse">
        {items
          .filter((item) => !item.cancelled)
          .map((item, i) => (
            <FileConversionStatus
              key={item.key}
              keyName={item.jobKey}
              file={{
                fileName: item.file.name,
                fileSize: item.file.size,
              }}
              progress={item.progress}
              fileStatus={item.fileStatus}
              result={item.result}
              onCancel={() => cancelFile(item.key)}
              setProgress={(progress) => updateProgress(item.key, progress)}
              totalRemaining={items.filter((x) => !isFinished(x)).length || 1}
            />
          ))}
      </Box>
    </StyledContainer>
  );
};

export default FilesSection;
