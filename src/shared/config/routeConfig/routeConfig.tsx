import type { RouteProps } from "react-router-dom";
import { MainPage } from "@/pages/MainPage";
import { AboutPage } from "@/pages/AboutPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export enum Routes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'notFound'
}

export const RouterPath: Record<Routes, string> = {
    [Routes.MAIN]: '/',
    [Routes.ABOUT]: '/about',
    [Routes.NOT_FOUND]: '*'
};

export const routeConfig: Record<Routes, RouteProps> = {
    [Routes.MAIN]: {
        path: RouterPath.main,
        element: <MainPage />
    },
    [Routes.ABOUT]: {
        path: RouterPath.about,
        element: <AboutPage />
    },
    [Routes.NOT_FOUND]: {
        path: RouterPath.notFound,
        element: <NotFoundPage />
    }
};