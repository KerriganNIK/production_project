import type {Meta, StoryObj} from '@storybook/react';

import {ThemeDecorator} from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "@/app/providers/ThemProvider";
import {PageError} from "@/widgets/PageError";

const meta = {
    title: 'widgets/PageError',
    component: PageError,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: {}
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};
