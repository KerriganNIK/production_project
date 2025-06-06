import classNames from "classnames";
import { Theme, useTheme } from "@/app/providers/ThemProvider";
import { Button, ThemeButton } from "@/shared/ui/Button/Button";
import { ReactComponent as LightTheme } from '@/shared/assets/icons/light-theme.svg';
import { ReactComponent as DarkTheme } from '@/shared/assets/icons/dark-theme.svg';

interface ThemeSwitcherProps {  
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
            theme={ThemeButton.CLEAR}
        >
            {theme === Theme.LIGHT ? <DarkTheme/> : <LightTheme />}
        </Button>
    );
};