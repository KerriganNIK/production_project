import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Input } from './Input';
import { ThemeInput } from './Input';

const meta = {
    title: 'shared/Input',
    component: Input,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: { onClick: fn() }
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: 'TEXT',
        theme: ThemeInput.default
    }
};