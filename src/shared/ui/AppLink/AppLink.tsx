import classNames from "classnames";
import classes from "./AppLink.module.scss";
import type { LinkProps } from "react-router-dom";
import { Link } from "react-router-dom";
import type { FC } from "react";

export enum AppLinkTheme {
    PRIMARY = 'primary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const { className, children, to, theme, ...rest } = props;

    return (
        <Link
            to={to}
            className={classNames('', {}, [className, classes[theme]])}
            {...rest}
        >
            {children}
        </Link>
    );
};