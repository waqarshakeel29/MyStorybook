import type { Meta, StoryObj } from "@storybook/react";
import "../../styles/main.scss";
import { Radio } from "../../components/Radio/Radio";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Input/Radio",
  component: Radio,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Disabled: Story = {
  args: { disabled: true, checked: true },
};

export const Checked: Story = {
  args: { checked: true },
};

export const WithLabelUnchecked: Story = {
  args: { label: 'Radio Text' },
};

export const WithLabelChecked: Story = {
  args: { label: 'Radio Text', checked: true },
};

export const WitHelpText: Story = {
  args: { label: 'Radio Text', helpText: 'Help text', disabled: false },
};
