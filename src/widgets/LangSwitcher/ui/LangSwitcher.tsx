import classNames from "classnames";
import classes from "./LangSwitcher.module.scss";
import {useTranslation} from "react-i18next";
import {Button, ThemeButton} from "@/shared/ui/Button/Button";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const {t, i18n } = useTranslation();

    const toggleTranslation = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(classes.LangSwitcher, {}, [className])}
            onClick={toggleTranslation}
        >
            {t('Язык')}
        </Button>
    );
};