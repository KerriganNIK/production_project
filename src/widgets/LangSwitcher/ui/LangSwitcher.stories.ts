import type { Meta, StoryObj } from '@storybook/react';
import { LangSwitcher } from "@/widgets/LangSwitcher";

const meta = {
    title: 'widgets/LangSwitcher',
    component: LangSwitcher,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: {}
} satisfies Meta<typeof LangSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
};