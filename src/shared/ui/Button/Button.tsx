import classNames from "classnames";
import classes from "./Button.module.scss";
import type {ButtonHTMLAttributes, FC} from "react";

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        children,
        className,
        theme,
        ...rest
    } = props;

    return (
        <button
            className={classNames(classes.Button, {}, [className, classes[theme]])}
            {...rest}
        >
            {children}
        </button>
    );
};