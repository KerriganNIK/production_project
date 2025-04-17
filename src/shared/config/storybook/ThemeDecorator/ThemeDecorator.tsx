import type {Theme} from "@/app/providers/ThemProvider";
import {ThemeProvider} from "@/app/providers/ThemProvider";
import type {StoryFn} from "@storybook/react";

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
    <ThemeProvider>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);