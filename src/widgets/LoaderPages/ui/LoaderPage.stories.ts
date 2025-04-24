import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemProvider";
import { LoaderPages } from "@/widgets/LoaderPages";

const meta = {
    title: 'widgets/LoaderPages',
    component: LoaderPages,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: {}
} satisfies Meta<typeof LoaderPages>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};
