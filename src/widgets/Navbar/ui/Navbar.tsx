import classNames from "classnames";
import classes from "./Navbar.module.scss";
import {Link} from "react-router-dom";
import {AppLink, AppLinkTheme} from "@/shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(classes.Navbar, {}, [className])}>
            <AppLink
                className={classes.linkSpace}
                to={'/'}
                theme={AppLinkTheme.PRIMARY}
            >
                Главная
            </AppLink>

            <Link
                className={classes.linkSpace}
                to={'/about'}
            >
                О Сайте
            </Link>
        </div>
    );
};