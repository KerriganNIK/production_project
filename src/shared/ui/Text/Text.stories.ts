import type { Meta, StoryObj } from '@storybook/react';
import { Text, ThemeText } from "@/shared/ui/Text/Text";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemProvider";

const meta = {
    title: 'shared/Text',
    component: Text,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: {
    }
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: "TITLE",
        text: "TEXT"
    }
};

export const onlyTitle: Story = {
    args: {
        title: "TITLE"
    }
};

export const onlyText: Story = {
    args: {
        text: "TEXT"
    }
};

export const Error: Story = {
    args: {
        title: "TITLE",
        text: "TEXT",
        theme: ThemeText.ERROR
    }
};

export const PrimaryDark: Story = {
    args: {
        title: "TITLE",
        text: "TEXT"
    },
    decorators: ThemeDecorator(Theme.DARK)
};

export const ErrorDark: Story = {
    args: {
        title: "TITLE",
        text: "TEXT",
        theme: ThemeText.ERROR
    },
    decorators: ThemeDecorator(Theme.DARK)
};
