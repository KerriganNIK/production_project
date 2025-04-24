import classNames from "classnames";
import { Loader } from "@/shared/ui/Loader/Loader";

interface LoaderPagesProps {
    className?: string;
}

export const LoaderPages = ({ className }: LoaderPagesProps) => {
    return (
        <div className={classNames('', {}, [className])}>
            <Loader/>
        </div>
    );
};