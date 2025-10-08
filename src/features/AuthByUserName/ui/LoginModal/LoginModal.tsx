import classNames from "classnames";
import { Modal } from "@/shared/ui/Modal/Modal";
import { Suspense } from "react";
import { LoginFormAsync as LoginForm } from "@/features/AuthByUserName/ui/LoginForm/LoginForm.async";
import { Loader } from "@/shared/ui/Loader/Loader";

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            className={classNames('', {}, [className])}
            lazy
        >
            <Suspense fallback={<Loader/>}>
                <LoginForm />
            </Suspense>
        </Modal>
    );
};