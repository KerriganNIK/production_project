import classNames from "classnames";
import classes from "./Modal.module.scss";
import type {ReactNode} from "react";

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;

    const mods: Record<string, boolean> = {
        [classes.open]: isOpen,
    }

    const closeHandler = () => {
        if (onClose) {
            onClose();
        }
    }

    return (
        <div className={classNames(classes.Modal, mods, [className])}>
            <div className={classes.overlay} onClick={closeHandler}>
                <div className={classes.content}>
                    {children}
                </div>
            </div>
        </div>
    );
};