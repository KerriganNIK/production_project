import classNames from "classnames";
import classes from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";
import { LangSwitcher } from "@/widgets/LangSwitcher";
import { Button, SizeButton, ThemeButton } from "@/shared/ui/Button/Button";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { ReactComponent as MainPageIcon } from '@/shared/assets/icons/main-page.svg';
import { ReactComponent as AboutPageIcon } from '@/shared/assets/icons/about-page.svg';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    return (
        <div
            data-testid="sidebar-test"
            className={classNames(classes.Sidebar, { [classes.collapsed]: collapsed }, [className])}
        >
            <div className={classes.items}>
                <AppLink
                    className={classes.linkSpace}
                    to={'/'}
                    theme={AppLinkTheme.PRIMARY}
                >
                    <MainPageIcon className={classes.icon}/>
                    <span className={classes.textLink}>{t('Главная')}</span>
                </AppLink>

                <AppLink
                    className={classes.linkSpace}
                    to={'/about'}
                    theme={AppLinkTheme.PRIMARY}
                >
                    <AboutPageIcon className={classes.icon}/>
                    <span className={classes.textLink}>{t('О сайте')}</span>
                </AppLink>
            </div>
            <Button
                data-testid={'toggle-button'}
                onClick={() => setCollapsed(prevState => !prevState)}
                className={classes.collapsedButton}
                theme={ThemeButton.BACKGROUND}
                size={SizeButton.XL}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>

            <div className={classes.switcher}>
                <ThemeSwitcher />

                <LangSwitcher
                    short={collapsed}
                    className={classes.lang}
                />
            </div>
        </div>
    );
};