import classNames from "classnames";
import classes from "./Sidebar.module.scss";
import {useState} from "react";
import {ThemeSwitcher} from "@/widgets/ThemeSwitcher";
import {LangSwitcher} from "@/widgets/LangSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className={classNames(classes.Sidebar, {[classes.collapsed]: collapsed}, [className])}>
            <button onClick={() => setCollapsed(prevState => !prevState)}>toggle</button>

            <div className={classes.switcher}>
                <ThemeSwitcher />

                {!collapsed ? <LangSwitcher className={classes.lang}/> :null}
            </div>
        </div>
    );
};