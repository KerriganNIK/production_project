import classNames from "classnames";
import classes from "./Text.module.scss";

export enum ThemeText {
    PRIMARY = 'primary',
    ERROR = 'error',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: ThemeText;
}

export const Text = (props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = ThemeText.PRIMARY
    } = props;
    return (
        <div className={classNames(classes.Text, {}, [className, classes[theme]])}>
            <div>{title && <p className={classes.title}>{title}</p>}</div>
            <div>{text && <p className={classes.text}>{text}</p>}</div>
        </div>
    );
};