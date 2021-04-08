import { Story, Meta } from "@storybook/react/types-6-0";

import ProgressBar, { IProps } from "./index";

export default {
  title: "Components/ProgressBar",
  component: ProgressBar,
  argTypes: {
    value: { control: "text" },
  },
} as Meta;

const Template: Story<IProps> = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 50,
};
