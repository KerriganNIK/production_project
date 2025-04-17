import classNames from "classnames";
import classes from "./Navbar.module.scss";
import {Button, ThemeButton} from "@/shared/ui/Button/Button";
import {useTranslation} from "react-i18next";
import {useCallback, useState} from "react";
import {Modal} from "@/shared/ui/Modal/Modal";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation();
    const [openModal, setOpenModal] = useState(false);

    const toggleModalOpen = useCallback(() => {
        setOpenModal(prev => !prev);
    }, []);

    return (
        <div className={classNames(classes.Navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR}
                onClick={toggleModalOpen}
            >
                {t('Войти')}
            </Button>
            <Modal
                isOpen={openModal}
                onClose={toggleModalOpen}
            >
                TEST
            </Modal>
        </div>
    );
};