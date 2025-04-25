import classNames from "classnames";
import type { ChangeEvent, InputHTMLAttributes } from "react";
import classes from "./Input.module.scss";
import { memo } from "react";

export enum ThemeInput {
    default = "default",
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    onChange?: (value: string) => void;
    value?: string;
    theme?: ThemeInput;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        onChange,
        value,
        type = "text",
        theme,
        ...rest
    } = props;

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
    };

    return (
        <div className={classNames(classes.Input, {}, [className])}>
            <input
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={classes[theme]}
                {...rest}
            />
        </div>
    );
});

