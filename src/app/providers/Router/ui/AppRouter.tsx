import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "@/shared/config/routeConfig/routeConfig";
import { LoaderPages } from "@/widgets/LoaderPages";

const AppRouter = () => {
    return (
        <Suspense fallback={<LoaderPages/>}>
            <Routes>
                {Object.values(routeConfig).map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={element}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;