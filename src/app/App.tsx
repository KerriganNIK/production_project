import React from 'react';
import '@/app/styles/index.scss'
import classNames from "classnames";
import {useTheme} from "@/app/providers/ThemProvider";
import {AppRouter} from "@/app/providers/Router";
import {Navbar} from "@/widgets/Navbar/ui/Navbar";

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <button onClick={toggleTheme}>Переключить</button>
            <AppRouter />
        </div>
    );
};

export default App;