import { useContext, useEffect } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "@/app/providers/ThemProvider/lib/ThemeContext";

export const UseTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.body.className = theme;
            localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
        }
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme(newTheme);
    };

    return { theme, toggleTheme };
};

export default UseTheme;