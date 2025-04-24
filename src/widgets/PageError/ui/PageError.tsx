import classNames from "classnames";
import classes from "./PageError.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "@/shared/ui/Button/Button";

interface ErrorPagesProps {
    className?: string;
}

export const PageError = ({ className }: ErrorPagesProps) => {
    const { t } = useTranslation();

    const reload = () => {
        location.reload();
    };

    return (
        <div className={classNames(classes.PageError, {}, [className])}>
            <p>{t('Произошла ошибка, обновите страницу!')}</p>
            <Button
                onClick={reload}
            >
                {t('Обновить')}
            </Button>
        </div>
    );
};