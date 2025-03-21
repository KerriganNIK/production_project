import type {Meta, StoryObj} from '@storybook/react';

import {ThemeDecorator} from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "@/app/providers/ThemProvider";
import {Navbar} from "@/widgets/Navbar/ui/Navbar";

const meta = {
    title: 'widgets/Navbar',
    component: Navbar,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: {}
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};
