import type { Meta } from "@storybook/react";
import "../../styles/main.scss";
import RadioGroup from "../../components/RadioGroup/RadioGroup";
import ControlledRadioGroup from "./ControlledRadioGroup";
import { Radio } from "../../components/Radio/Radio";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Input/RadioGroup",
  component: RadioGroup,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof RadioGroup>;

export default meta;
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default = {
  args: {
    onChange: () => {},
    selected: "1",
    disabled: false,
  },
  render: (args: any) => {
    return (
      <RadioGroup {...args}>
        <Radio id="1" label="Radio1" onChange={() => {}} />
        <Radio id="2" label="Radio2" onChange={() => {}} />
        <Radio id="3" label="Radio3" onChange={() => {}} />
      </RadioGroup>
    );
  },
};

export const Column = {
  args: {
    onChange: () => {},
    selected: "1",
    disabled: false,
  },
  render: (args: any) => {
    return (
      <RadioGroup direction="column" {...args}>
        <Radio id="1" label="Radio1" onChange={() => {}} />
        <Radio id="2" label="Radio2" onChange={() => {}} />
        <Radio id="3" label="Radio3" onChange={() => {}} />
      </RadioGroup>
    );
  },
};


export const Controlled = {
  render: () => {
    return <ControlledRadioGroup />;
  },
};
