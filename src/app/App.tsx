import '@/app/styles/index.scss';
import classNames from "classnames";
import {useTheme} from "@/app/providers/ThemProvider";
import {AppRouter} from "@/app/providers/Router";
import {Navbar} from "@/widgets/Navbar/ui/Navbar";
import {Sidebar} from "@/widgets/Sidebar/ui/Sidebar";
import {Suspense} from "react";

const App = () => {
    const {theme} = useTheme();

    return (
        <Suspense fallback='Loading...'>
            <div className={classNames('app', {}, [theme])}>
                <Navbar/>
                <div className={'content-page'}>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </div>
        </Suspense>
    );
};

export default App;