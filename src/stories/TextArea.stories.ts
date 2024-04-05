import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from '../components/TextArea/TextArea';
import '../styles/main.scss'; 

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Input/TextArea',
  component: TextArea,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    value: "Text",
  },
};

export const Label: Story = {
  args: {
    label: 'Input Label:'
  },
};

export const Placeholder: Story = {
  args: {
    placeholder: 'placeholder'
  },
};

export const Disabled: Story = {
  args: {
    value: 'Text',
    disabled: true,
  },
};

export const Invalid: Story = {
  args: {
    invalid: true,
  },
};

export const Rows: Story = {
  args: {
    rows: 4,
    maxLength: 10,
  },
};