import { FC } from "react";
import filesize from "filesize";
import { FileDetailWrapper, IconWrapper, Wrapper } from "./styles";
import { getFileType, truncateFileName } from "utils/file";

export interface IProps {
  fileName: string;
  fileSize: number;
}

const FileItem: FC<IProps> = ({
  fileName = "unknown",
  fileSize: size = 0,
  ...props
}) => {
  const fileType = getFileType(fileName);
  const FileIcon = fileType.icon;

  return (
    <Wrapper {...props}>
      <IconWrapper>
        <FileIcon />
      </IconWrapper>
      <FileDetailWrapper>
        <h6>{truncateFileName(fileName, 10)}</h6>
        <p>{filesize(size)}</p>
      </FileDetailWrapper>
    </Wrapper>
  );
};

export default FileItem;
