import type { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from "@/features/AuthByUserName/ui/LoginForm/LoginForm";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemProvider";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: { }
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
    },
    decorators: [
        (StoreDecorator({
            login: {
                username: 'admin',
                password: '123'
            }
        }))
    ]
};

export const Dark: Story = {
    args: {
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
        (StoreDecorator({
            login: {
                username: 'admin',
                password: '123'
            }
        }))
    ]
};