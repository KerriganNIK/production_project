import classNames from "classnames";
import classes from "./LoginForm.module.scss";
import { Input, ThemeInput } from "@/shared/ui/Input/Input";
import { Button, ThemeButton } from "@/shared/ui/Button/Button";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    return (
        <div className={classNames(classes.LoginForm, {}, [className])}>
            <Input
                className={classes.input}
                placeholder={`username`}
                theme={ThemeInput.default}
            />
            <Input
                className={classes.input}
                placeholder={`password`}
                type={'password'}
                theme={ThemeInput.default}
            />
            <Button
                className={classes.loginBtn}
                theme={ThemeButton.BACKGROUND}
            >
                Войти
            </Button>
        </div>
    );
};