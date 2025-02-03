import React, {Suspense, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "@/pages/MainPage/MainPage";
import AboutPage from "@/pages/AboutPage/AboutPage";
import '@/styles/index.scss'
import useTheme from "@/theme/useTheme";

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={'app' + ' ' + theme}>
            <button onClick={toggleTheme}>Переключить</button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPage/>} />
                    <Route path="/about" element={<AboutPage/>} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;