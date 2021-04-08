import { FC, useEffect, useRef } from "react";

import FileItem from "components/FileItem";
import ProgressBar from "components/Progress";
import {
  DownloadButtonsWrapper,
  Wrapper,
  ProgressBarWrapper,
  LeftWrapper,
  RightWrapper,
  ButtonWrapper,
} from "./styles";
import Button from "components/Button";
import { FileStatusEnum, FileTypeEnum } from "enums/conversion.enum";
import { ReactComponent as DownloadIcon } from "assets/icons/download.svg";
import { extchange, getFileType, isFinished } from "utils/file";
import { config } from "config";
import { IFile } from "contexts/FileConversionContext";
export interface IProps {
  keyName: string;
  file: {
    fileName: string;
    fileSize: number;
  };
  fileStatus: FileStatusEnum;
  result: string[];
  onCancel: () => void;
  progress: number;
  setProgress: (progress: number) => void;
  totalRemaining: number;
}

const FileConversionStatus: FC<IProps> = ({
  keyName,
  file,
  fileStatus = FileStatusEnum.PENDING,
  result,
  onCancel,
  progress,
  setProgress,
  totalRemaining,
}) => {
  const fileStatusRef = useRef(fileStatus);
  const progressRef = useRef(progress);
  const totalRemainingRef = useRef(totalRemaining);

  useEffect(() => {
    fileStatusRef.current = fileStatus;
    progressRef.current = progress;
    totalRemainingRef.current = totalRemaining;
  }, [fileStatus, progress, totalRemaining]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isFinished({ fileStatus: fileStatusRef.current } as IFile)) {
        setProgress(100);
        clearTimeout(timer);
      } else {
        setProgress(
          Math.min(
            99,
            (progressRef.current || 0) + 1 / (totalRemainingRef.current + 1)
          )
        );
      }
    }, 1000 / 24);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderResults = () => {
    return result
      .filter((item) => getFileType(item).type !== FileTypeEnum.UNKNOWN)
      .map((item) => {
        return (
          <a
            key={getFileType(item).type}
            href={`${config.cloudFrontUrl}/${extchange(keyName, item)}`}
            target="_blank"
            rel="noreferrer"
          >
            <Button
              key={getFileType(item).type}
              color={getFileType(item)?.color}
              rounded={false}
              size="small"
              backgroundColor={getFileType(item)?.backgroundColor}
              style={{ marginRight: "10px" }}
            >
              {getFileType(item).type}
              <DownloadIcon fill={getFileType(item)?.color} />
            </Button>
          </a>
        );
      });
  };

  return (
    <Wrapper key={keyName}>
      <LeftWrapper>
        <FileItem fileName={file.fileName} fileSize={file.fileSize} />
        <ProgressBarWrapper>
          <ProgressBar value={progress} />
        </ProgressBarWrapper>
      </LeftWrapper>
      <RightWrapper>
        {fileStatus === FileStatusEnum.FINISHED && (
          <DownloadButtonsWrapper>{renderResults()}</DownloadButtonsWrapper>
        )}
        <ButtonWrapper>
          {fileStatus !== FileStatusEnum.FINISHED &&
          fileStatus !== FileStatusEnum.FAILED ? (
            <Button
              size="small"
              rounded={false}
              outlined={true}
              style={{
                minWidth: 154,
              }}
              onClick={onCancel}
            >
              Cancel
            </Button>
          ) : (
            <a
              href={`${config.cloudFrontUrl}/${extchange(
                keyName,
                "download.zip"
              )}`}
              target="_blank"
              rel="noreferrer"
              style={{
                width: "100%",
              }}
            >
              <Button size="small" rounded={false} style={{ minWidth: 154 }}>
                Download All
              </Button>
            </a>
          )}
        </ButtonWrapper>
      </RightWrapper>
    </Wrapper>
  );
};

export default FileConversionStatus;
