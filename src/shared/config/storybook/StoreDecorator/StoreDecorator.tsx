import type { StoryFn } from "@storybook/react";
import { StoreProvider } from "@/app/providers/StorePovider/ui/StoreProvider";
import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "@/app/providers/StorePovider";

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: StoryFn) => (
    <StoreProvider initialState={state}>
        <StoryComponent />
    </StoreProvider>
);