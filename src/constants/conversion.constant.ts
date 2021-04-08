import { ReactComponent as ImageIcon } from "assets/icons/file-type-image.svg";
import { ReactComponent as PdfIcon } from "assets/icons/file-type-pdf.svg";
import { ReactComponent as UnknowIcon } from "assets/icons/file-type-image.svg";
import { ConversionStatusEnum, FileTypeEnum } from "enums/conversion.enum";

export const AVAILABLE_TYPES = [".ai", ".png", ".eps", ".svg"];

export const FILE_TYPES = [
  {
    type: FileTypeEnum.PNG,
    exts: [".png"],
    color: "#029eff",
    icon: ImageIcon,
    backgroundColor: "rgba(2,158,255,0.05)",
  },
  {
    type: FileTypeEnum.DXF,
    exts: [".dxf"],
    color: "#343cff",
    icon: PdfIcon,
    backgroundColor: "rgba(52,60,255,0.05)",
  },
  {
    type: FileTypeEnum.JPG,
    exts: [".jpg", ".jpeg"],
    color: "#eb00ff",
    icon: ImageIcon,
    backgroundColor: "rgba(235,0,255,0.05)",
  },
  {
    type: FileTypeEnum.EPS,
    exts: [".eps"],
    color: "#eb00ff",
    icon: ImageIcon,
    backgroundColor: "rgba(235,0,255,0.05)",
  },
  {
    type: FileTypeEnum.AI,
    exts: [".ai"],
    color: "#ff7f00",
    icon: PdfIcon,
    backgroundColor: "rgba(255,127,0,0.05)",
  },
  {
    type: FileTypeEnum.PDF,
    exts: [".pdf"],
    color: "#ff0900",
    icon: PdfIcon,
    backgroundColor: "rgba(255,9,0,0.05)",
  },
  {
    type: FileTypeEnum.SVG,
    exts: [".svg"],
    color: "#09c626",
    icon: ImageIcon,
    backgroundColor: "rgba(9,198,38,0.05)",
  },
];

export const UNKNOWN_FILE_TYPE = {
  type: FileTypeEnum.UNKNOWN,
  icon: UnknowIcon,
  color: "#09c626",
  backgroundColor: "rgba(9,198,38,0.05)",
};

export const STEPS = [
  {
    status: ConversionStatusEnum.INIT,
    title: "File Converter",
    description: "Easily convert to and from In seconds",
  },
  {
    status: ConversionStatusEnum.CONVERTING,
    title: "Converting your files",
    description: "Please wait. Your file is converting.",
  },
  {
    status: ConversionStatusEnum.FINISHED,
    title: "Convertion completed",
    description: "Download your converted files",
  },
];
