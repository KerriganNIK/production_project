import '@/app/styles/index.scss'
import classNames from "classnames";
import {useTheme} from "@/app/providers/ThemProvider";
import {AppRouter} from "@/app/providers/Router";
import {Navbar} from "@/widgets/Navbar/ui/Navbar";
import {ThemeSwitcher} from "@/widgets/ThemeSwitcher";

const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <ThemeSwitcher />
            <AppRouter />
        </div>
    );
};

export default App;