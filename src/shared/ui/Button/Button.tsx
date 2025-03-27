import classNames from "classnames";
import classes from "./Button.module.scss";
import type {ButtonHTMLAttributes, FC} from "react";

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGOUND_INVERTED = 'backgroundInverted',
}

export enum SizeButton {
    M = 'size_M',
    L = 'size_L',
    XL = 'size_XL',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    square?: boolean;
    size?: SizeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        children,
        className,
        theme,
        square,
        size,
        ...rest
    } = props;

    const mods: Record<string, boolean> = {
        [classes.square]: square
    };
    
    return (
        <button
            className={classNames(classes.Button, mods, [className, classes[theme], classes[size]])}
            {...rest}
        >
            {children}
        </button>
    );
};