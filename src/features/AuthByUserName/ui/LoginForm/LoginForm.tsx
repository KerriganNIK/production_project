import classNames from "classnames";
import classes from "./LoginForm.module.scss";
import { Input, ThemeInput } from "@/shared/ui/Input/Input";
import { Button, ThemeButton } from "@/shared/ui/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { useCallback } from "react";
import { loginActions } from "@/features/AuthByUserName";
import { usePostLoginMutation } from "../../model/services/loginByUserName/loginByUserName";
import { Text, ThemeText } from "@/shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { userActions } from "@/enitites/User";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { username, password } = useSelector(getLoginState);
    const [postLogin, { isLoading, error }] = usePostLoginMutation();

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const authByUsername = async () => {
        try {
            const user = {
                username: username,
                password: password
            };

            const response = await postLogin(user).unwrap();
            dispatch(userActions.setUserAuthData(response));
            localStorage.setItem("user", JSON.stringify(response));
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <div className={classNames(classes.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')}/>
            {error && <Text theme={ThemeText.ERROR} text={t('Введён неверный логин или пароль')} />}

            <Input
                className={classes.input}
                placeholder={`username`}
                theme={ThemeInput.default}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                className={classes.input}
                placeholder={`password`}
                type={'password'}
                theme={ThemeInput.default}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                className={classes.loginBtn}
                theme={ThemeButton.BACKGROUND}
                disabled={isLoading}
                onClick={authByUsername}
            >
                Войти
            </Button>
        </div>
    );
};