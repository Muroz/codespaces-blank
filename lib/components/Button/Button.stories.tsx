import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  title: "SimpleDesign/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Solid: Story = {
  args: {
    children: "Solid",
    variant: "solid",
    disabled: false,
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
    disabled: false,
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost",
    variant: "ghost",
    disabled: false,
  },
};
