import classNames from "classnames";
import classes from "./Modal.module.scss";
import type { ReactNode, MouseEvent } from "react";
import { useEffect } from "react";
import { useState, useCallback, useRef } from "react";
import { Portal } from "@/shared/ui/Portal/Portal";

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const timeRef = useRef<ReturnType<typeof setTimeout>>();
    const [isMounted, setIsMounted] = useState(false);

    const mods: Record<string, boolean> = {
        [classes.open]: isOpen,
        [classes.isClosing]: isClosing
    };

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {onClose();
                setIsClosing(false);
            },
            ANIMATION_DELAY);
        }
    }, [onClose]);

    const contentCloseHandler = (e: MouseEvent) => {
        e.stopPropagation();
    };

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === "Escape") {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timeRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(classes.Modal, mods, [className])}>
                <div className={classes.overlay} onClick={closeHandler}>
                    <div className={classes.content} onClick={contentCloseHandler}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};