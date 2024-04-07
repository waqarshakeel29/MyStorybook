import type { Meta, StoryObj } from "@storybook/react";
import "../../styles/main.scss";
import { Container } from "../../components/Popup";
import storyStyles from './storyStyles.module.scss';
import { Button } from "../../components/Button/Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Popup/Container",
  component: Container,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    closePopup: () => {},
    position: "center",
    openPopupCb: () => {},
    closePopupCb: () => {},
  },
  render: (args) => {
    return (
      <div className={storyStyles.containerWrapper}>
        <Button label="Popup" />
        <Container
          closePopup={args.closePopup}
          position={args.position}
          openPopupCb={args.openPopupCb}
          closePopupCb={args.closePopupCb}
          isDraggable
        >
          <div className={storyStyles.popupContent}>example popup content</div>
        </Container>
      </div>
    );
  },
};
