import classNames from "classnames";
import classes from "./Navbar.module.scss";
import { Button, ThemeButton } from "@/shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { useCallback, useState } from "react";
import { LoginModal } from "@/features/AuthByUserName";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "@/enitites/User";
import { getUserAuthData } from "@/enitites/User/model/selectors/getUserAuthData/getUserAuthData";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);
    const [openModal, setOpenModal] = useState(false);

    const toggleModalOpen = useCallback(() => {
        setOpenModal(prev => !prev);
    }, []);

    const onLogoutUser = useCallback(() =>{
        dispatch(userActions.logoutAuthData());
        setOpenModal(false);
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(classes.Navbar, {}, [className])}>
                <Button
                    theme={ThemeButton.CLEAR}
                    onClick={onLogoutUser}
                    className={classes.linkSpace}
                >
                    {t('Выйти')}
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(classes.Navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR}
                onClick={toggleModalOpen}
                className={classes.linkSpace}
            >
                {t('Войти')}
            </Button>
            <LoginModal
                isOpen={openModal}
                onClose={toggleModalOpen}
            />
        </div>
    );
};