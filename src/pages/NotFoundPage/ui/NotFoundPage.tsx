import classNames from "classnames";
import classes from "./NotFoundPage.module.scss";
import {useTranslation} from "react-i18next";

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({className}: NotFoundPageProps) => {
    const {t} = useTranslation();

    return (
        <div className={classNames(classes.NotFoundPage, {}, [className])}>
            <h1>
                {t('Страница не найдена')}
            </h1>
        </div>
    );
};