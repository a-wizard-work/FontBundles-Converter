import { Story, Meta } from "@storybook/react/types-6-0";
import { FileStatusEnum } from "enums/conversion.enum";
import FileConversionStatus, { IProps } from "./index";

export default {
  title: "Components/FileConversionStatus",
  component: FileConversionStatus,
  argTypes: {
    file: {
      fileName: { control: "text" },
      fileSize: { control: "text" },
    },
    fileStatus: { control: "text" },
    result: {
      control: "text",
    },
  },
} as Meta;

const Template: Story<IProps> = (args) => <FileConversionStatus {...args} />;

export const Default = Template.bind({});
Default.args = {
  file: {
    fileName: "icon.svg",
    fileSize: 12123123,
  },
  fileStatus: FileStatusEnum.CONVERTING,
  result: ["icon.pdf", "icon.ai"],
};
