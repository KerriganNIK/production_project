import classNames from "classnames";
import classes from "./AppLink.module.scss";
import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {className, children, to, theme, ...rest} = props;

    return (
        <Link
            to={to}
            className={classNames(classes.AppLink, {}, [className, classes[theme]])}
            {...rest}
        >
            {children}
        </Link>
    );
};