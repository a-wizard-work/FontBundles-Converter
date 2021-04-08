import GlobalStyles from "styles/global-styles";
import { Story, Meta } from "@storybook/react/types-6-0";

import { ReactComponent as DownloadIcon } from "assets/icons/download.svg";

import Button, { IProps } from "./index";
import { FileTypeEnum } from "enums/conversion.enum";
import { FILE_TYPES } from "constants/conversion.constant";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    color: { control: "color" },
    backgroundColor: { control: "color" },
    hoverBackgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<IProps> = (args) => (
  <>
    <GlobalStyles />
    <Button {...args} />
  </>
);

export const DownloadEverything = Template.bind({});
DownloadEverything.args = {
  size: "large",
  children: "Download everything",
};

export const DownloadAll = Template.bind({});
DownloadAll.args = {
  size: "small",
  rounded: false,
  children: "Download all",
};

export const Cancel = Template.bind({});
Cancel.args = {
  size: "small",
  rounded: false,
  outlined: true,
  children: "Cancel",
};

const TypesTemplate: Story = () => (
  <>
    <GlobalStyles />
    <div style={{ display: "flex" }}>
      {[
        FileTypeEnum.PNG,
        FileTypeEnum.DXF,
        FileTypeEnum.JPG,
        FileTypeEnum.AI,
        FileTypeEnum.PDF,
        FileTypeEnum.SVG,
      ].map((type) => {
        const fileType = FILE_TYPES.find((c) => c.type === type);

        return (
          <Button
            color={fileType?.color}
            rounded={false}
            size="small"
            backgroundColor={fileType?.backgroundColor}
            style={{ marginRight: "10px" }}
          >
            {type}
            <DownloadIcon fill={fileType?.color} />
          </Button>
        );
      })}
    </div>
  </>
);

export const Types = TypesTemplate.bind({});
