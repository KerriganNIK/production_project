import React, {useContext} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "@/theme/ThemeContext";

export const UseTheme = () => {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    }

    return {theme, toggleTheme};
};

export default UseTheme;