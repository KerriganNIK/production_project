import React, {Suspense, useState} from 'react';
import classes from '../app.module.scss'
import {Route, Routes} from "react-router-dom";
import MainPage from "@/pages/MainPage";
import AboutPage from "@/pages/AboutPage";

const App = () => {
    return (
        <div>
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