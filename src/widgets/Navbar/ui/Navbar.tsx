import classNames from "classnames";
import classes from "./Navbar.module.scss";
import {Link} from "react-router-dom";
import {AppLink, AppLinkTheme} from "@/shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation();

    return (
        <div className={classNames(classes.Navbar, {}, [className])}>
            <AppLink
                className={classes.linkSpace}
                to={'/'}
                theme={AppLinkTheme.PRIMARY}
            >
                {t('Главная')}
            </AppLink>

            <Link
                className={classes.linkSpace}
                to={'/about'}
            >
                {t('О сайте')}
            </Link>
        </div>
    );
};