import type {RouteProps} from "react-router-dom";
import {MainPage} from "@/pages/MainPage";
import {AboutPage} from "@/pages/AboutPage";

export enum Routes {
    MAIN = 'main',
    ABOUT = 'about'
}

export const RouterPath: Record<Routes, string> = {
    [Routes.MAIN]: '/',
    [Routes.ABOUT]: '/about'
};

export const routeConfig: Record<Routes, RouteProps> = {
    [Routes.MAIN]: {
        path: RouterPath.main,
        element: <MainPage />
    },
    [Routes.ABOUT]: {
        path: RouterPath.about,
        element: <AboutPage />
    }
};