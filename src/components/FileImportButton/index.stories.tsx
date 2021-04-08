import { Story, Meta } from "@storybook/react/types-6-0";

import FileImportButton from "./index";

export default {
  title: "Components/FileImportButton",
  component: FileImportButton,
} as Meta;

const Template: Story = () => <FileImportButton />;

export const Default = Template.bind({});
