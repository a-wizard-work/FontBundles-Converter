import { Story, Meta } from "@storybook/react/types-6-0";

import FileItem, { IProps } from "./index";

export default {
  title: "Components/FileItem",
  component: FileItem,
  argTypes: {
    fileName: { control: "text" },
    fileSize: { control: "text" },
  },
} as Meta;

const Template: Story<IProps> = (args) => <FileItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  fileName: "file.png",
  fileSize: 1444,
};
