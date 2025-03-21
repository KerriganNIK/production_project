import type {Meta, StoryObj} from '@storybook/react';

import {ThemeDecorator} from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "@/app/providers/ThemProvider";
import {AppLink, AppLinkTheme} from "@/shared/ui/AppLink/AppLink";

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: {
        to: '/',
        children: 'Text'
    }
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryLight: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY
    }
};

export const PrimaryDark: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};
