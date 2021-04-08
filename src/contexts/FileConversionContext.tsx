import { config } from "config";
import { ConversionStatusEnum, FileStatusEnum } from "enums/conversion.enum";
import useInterval from "hooks/useInterval";
import { createContext, FC, useCallback, useEffect, useState } from "react";
import apiClient from "utils/api-client";
import * as path from "path";
import { AVAILABLE_TYPES } from "constants/conversion.constant";
import axios from "axios";
import * as uuid from "uuid";
import { isFinished } from "utils/file";

export interface IFile {
  file: File;
  key: string;
  jobKey: string;
  progress: number;
  result?: any;
  fileStatus: FileStatusEnum;
  cancelled: boolean;
}

export interface IFileConversionContext {
  items: IFile[];
  conversionStatus: ConversionStatusEnum;
  progress: number;
  addFilesFromPC: (files: File[]) => void;
  cancelFile: (key: string) => void;
  updateProgress: (key: string, progress: number) => void;
}

export const FileConversionContext = createContext<IFileConversionContext>(({
  items: [],
  conversionStatus: ConversionStatusEnum.INIT,
  progress: 0,
} as unknown) as IFileConversionContext);

export const FileConversionProvider: FC = ({ children }) => {
  const [currentUploadingIndex, setCurrentUploadingIndex] = useState<number>(0);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [items, setItems] = useState<IFile[]>([]);
  const [progress, setProgress] = useState<number>(0);
  const [
    conversionStatus,
    setConversionStatus,
  ] = useState<ConversionStatusEnum>(ConversionStatusEnum.INIT);

  useEffect(() => {
    if (currentUploadingIndex === items.length || isUploading) {
      return;
    }

    async function upload() {
      const file = items[currentUploadingIndex];
      const res = await apiClient(
        `${config.apiUrl}/file-upload?fileName=${file.file.name}`
      );

      await axios({
        method: "PUT",
        url: res.fileUploadURL,
        data: file.file,
        headers: { "Content-Type": "multipart/form-data" },
      });

      setItems((_items) => {
        const item = _items[currentUploadingIndex];

        item.fileStatus = FileStatusEnum.WAITING;
        item.jobKey = res.key;

        return [..._items];
      });
      setCurrentUploadingIndex(currentUploadingIndex + 1);
      setIsUploading(false);
    }

    setIsUploading(true);
    upload();
  }, [currentUploadingIndex, isUploading, items]);

  const addFilesFromPC = (files: File[]) => {
    const total = items.filter((x) => !isFinished(x)).length;
    if (!total) {
      setProgress(0);
    }

    setItems((_items) => {
      return [
        ..._items,
        ...Array.from(files)
          .filter((file) => AVAILABLE_TYPES.includes(path.extname(file.name)))
          .map((file) => ({
            file,
            key: uuid.v1(),
            jobKey: "",
            fileStatus: FileStatusEnum.PENDING,
            progress: 0,
            cancelled: false,
          })),
      ];
    });
  };

  const cancelFile = (key: string) => {
    setItems((_items) => {
      const _item = _items.find((i) => i.key === key);
      if (_item) {
        _item.cancelled = true;
      }
      return [..._items];
    });
  };

  const updateProgress = (key: string, progress: number) => {
    setItems((_items) => {
      const _item = _items.find((i) => i.key === key);
      if (_item) {
        _item.progress = progress;
      }
      return [..._items];
    });
  };

  useInterval(async () => {
    for (const item of items
      .filter(
        (item) =>
          !item.cancelled &&
          item.jobKey &&
          item.fileStatus !== FileStatusEnum.FINISHED &&
          item.fileStatus !== FileStatusEnum.FAILED
      )
      .slice(0, 5)) {
      const res = await apiClient(`${config.apiUrl}/status?key=${item.jobKey}`);
      setItems((_items) => {
        const _item = _items.find((i) => i.jobKey === item.jobKey);
        if (_item) {
          _item.fileStatus = res.jobStatus;
          _item.result =
            res.jobStatus === FileStatusEnum.FINISHED
              ? JSON.parse(res.jobResult)
              : {};
        }
        return [..._items];
      });
    }
  }, 3000);

  useInterval(async () => {
    if (
      !items.length ||
      items.reduce((prev: boolean, curr: IFile) => prev && curr.cancelled, true)
    ) {
      setConversionStatus(ConversionStatusEnum.INIT);
    } else if (
      items.filter(
        (item) =>
          !item.cancelled &&
          item.fileStatus !== FileStatusEnum.FINISHED &&
          item.fileStatus !== FileStatusEnum.FAILED
      ).length
    ) {
      setConversionStatus(ConversionStatusEnum.CONVERTING);
    } else {
      setProgress(100);
      setConversionStatus(ConversionStatusEnum.FINISHED);
    }

    if (conversionStatus === ConversionStatusEnum.CONVERTING) {
      const total = items.filter((x) => !isFinished(x)).length;
      setProgress(Math.min(99, progress + (24 / 1000) * (2 / total)));
    }
  }, 24);

  const updateProgressCallback = useCallback(
    (key: string, progress: number) => updateProgress(key, progress),
    []
  );

  return (
    <FileConversionContext.Provider
      value={{
        items,
        conversionStatus,
        progress,
        addFilesFromPC,
        cancelFile,
        updateProgress: updateProgressCallback,
      }}
    >
      {children}
    </FileConversionContext.Provider>
  );
};

export default FileConversionContext;
