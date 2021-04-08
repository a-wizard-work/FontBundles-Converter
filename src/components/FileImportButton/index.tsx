import { FC, useRef } from "react";

import { ButtonText, ButtonWrapper, IconButton, IconImage } from "./styles";
import DropBoxImage from "assets/icons/upload-from-dropbox.svg";
import GDriveImage from "assets/icons/upload-from-gdrive.svg";
import PcImage from "assets/icons/upload-from-pc.svg";
import LinkImage from "assets/icons/upload-from-link.svg";

interface IProps {
  onImport?: (files: File[]) => void;
  onChangeGDrive?: () => void;
}

const FileImportButton: FC<IProps> = ({ onImport }) => {
  const inputFile = useRef<HTMLInputElement>(null);

  const handleBrowse = () => {
    inputFile && inputFile.current && inputFile?.current.click();
  };

  const handleChange = (e: any) => {
    onImport && onImport(e.target.files);
  };

  return (
    <ButtonWrapper onClick={handleBrowse}>
      <input
        type="file"
        id="file"
        ref={inputFile}
        style={{ display: "none" }}
        onChange={handleChange}
      />
      <ButtonText>Choose Files</ButtonText>
      <IconButton>
        <IconImage src={PcImage} alt="upload from pc" />
      </IconButton>
      <IconButton disabled>
        <IconImage src={DropBoxImage} alt="upload from dropbox" />
      </IconButton>
      <IconButton disabled>
        <IconImage src={GDriveImage} alt="upload from google drive" />
      </IconButton>
      <IconButton disabled>
        <IconImage src={LinkImage} alt="upload from link" />
      </IconButton>
    </ButtonWrapper>
  );
};

export default FileImportButton;
