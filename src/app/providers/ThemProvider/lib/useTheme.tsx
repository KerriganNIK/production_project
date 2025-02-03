import React, {useContext} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "@/app/providers/ThemProvider/lib/ThemeContext";

export const UseTheme = () => {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }

    return {theme, toggleTheme};
};

export default UseTheme;