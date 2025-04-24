import classNames from "classnames";
import classes from "./Loader.module.scss";

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
    return (
        <span className={classNames(classes.Loader, {}, [className])} />
    );
};