import { BrowserRouter } from 'react-router-dom';
import type { StoryObj } from "@storybook/react";

export const RouterDecorator = (story: () => StoryObj) => (
    <BrowserRouter>
        {story()}
    </BrowserRouter>
);