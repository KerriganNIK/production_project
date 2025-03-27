import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';

import {Button, SizeButton, ThemeButton} from './Button';
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

export const Background: Story = {
    args: {
        children: 'TEXT',
        theme: ThemeButton.BACKGROUND
    }
};

export const BackgroundInverted: Story = {
    args: {
        children: 'TEXT',
        theme: ThemeButton.BACKGOUND_INVERTED
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

export const Square: Story = {
    args: {
        theme: ThemeButton.BACKGROUND,
        children: '>',
        square: true,
        size: SizeButton.L
    }
};

export const SquareDark: Story = {
    args: {
        theme: ThemeButton.BACKGROUND,
        children: '>',
        square: true,
        size: SizeButton.L
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};
