import React from "react";
import { render } from "react-dom";
import App from "@/app/App";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "@/app/providers/ThemProvider/ui/ThemeProvider";
import './shared/config/i18n/i18n';
import { ErrorBoundary } from "@/app/providers/ErrorBoundary";
import '@/app/styles/index.scss';
import { StoreProvider } from "@/app/providers/StorePovider/ui/StoreProvider";

render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById("root")
);