import classNames from "classnames";
import classes from "./LoginForm.module.scss";
import { Input, ThemeInput } from "@/shared/ui/Input/Input";
import { Button, ThemeButton } from "@/shared/ui/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { loginActions } from "@/features/AuthByUserName";
import { usePostLoginMutation } from "../../model/services/loginByUserName/loginByUserName";
import { Text, ThemeText } from "@/shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { userActions } from "@/enitites/User";
import { getLoginPassword } from "@/features/AuthByUserName/model/selectors/getLoginPassword/getLoginPassword";
import { getLoginUsername } from "@/features/AuthByUserName/model/selectors/getLoginUsername/getLoginUsername";
import { loginReducer } from "@/features/AuthByUserName/model/slice/loginSlice";
import type { ReducerList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { DynamicModuleLoader } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

interface LoginFormProps {
    className?: string;
}

const initialReducer: ReducerList = {
    login: loginReducer
};

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
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
        <DynamicModuleLoader
            key='loginForm'
            reducers={initialReducer}
        >
            <div className={classNames(classes.LoginForm, {}, [className])}>
                <Text title={t('Форма авторизации')}/>
                {error && <Text theme={ThemeText.ERROR} text={t('Введён неверный логин или пароль')}/>}

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
        </DynamicModuleLoader>
    );
};