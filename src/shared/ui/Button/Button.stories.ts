import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';

import {Button, ThemeButton} from './Button';
import {ThemeDecorator} from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "@/app/providers/ThemProvider";

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: { onClick: fn() }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'TEXT'
    }
};

export const Clear: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: 'TEXT'
    }
};

export const OutlineLight: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: 'TEXT'
    }
};

export const OutlineDark: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: 'TEXT'
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};
