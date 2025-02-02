import React, {Suspense, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "@/pages/MainPage/MainPage";
import AboutPage from "@/pages/AboutPage/AboutPage";
import '@/styles/index.scss'

const App = () => {
    return (
        <div className='app light'>
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