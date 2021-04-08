import { FILE_TYPES, UNKNOWN_FILE_TYPE } from "constants/conversion.constant";
import { IFile } from "contexts/FileConversionContext";
import { FileStatusEnum } from "enums/conversion.enum";
import * as path from "path";

export const getFileType = (fileName: string) => {
  return (
    FILE_TYPES.find((t) => t.exts.includes(path.extname(fileName))) ||
    UNKNOWN_FILE_TYPE
  );
};

export const truncateFileName = (fileName: string, num: number): string => {
  const nameStr = fileName.split(".").slice(0, -1).join(".") || fileName + "";
  const extension = fileName.split(".").pop() || "";

  if (nameStr.length <= num) {
    return `${nameStr}.${extension}`;
  }

  return `${nameStr.slice(0, num)}... .${extension}`;
};
export const extchange = (source: string, refer: string, full = true) => {
  return full
    ? `${path.dirname(source)}/${path.basename(
        source,
        path.extname(source)
      )}${path.extname(refer)}`
    : `${path.basename(source, path.extname(source))}${path.extname(refer)}`;
};
export const isFinished = (file: IFile) =>
  file.fileStatus === FileStatusEnum.FAILED ||
  file.fileStatus === FileStatusEnum.FINISHED;
