import GlobalStyles from "styles/global-styles";
import { Story, Meta } from "@storybook/react/types-6-0";

import ConversionStatus, { IProps } from "./index";
import { ConversionStatusEnum } from "enums/conversion.enum";

export default {
  title: "Components/ConversionStatus",
  component: ConversionStatus,
  argTypes: {
    status: { control: "radio" },
    progress: { control: "text" },
  },
} as Meta;

const Template: Story<IProps> = (args) => (
  <>
    <GlobalStyles />
    <ConversionStatus {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  status: ConversionStatusEnum.INIT,
  progress: 0,
};
