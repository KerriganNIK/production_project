import classNames from "classnames";
import {AppRouter} from "@/app/providers/Router";
import {Navbar} from "@/widgets/Navbar/ui/Navbar";
import {Sidebar} from "@/widgets/Sidebar/ui/Sidebar";
import {Suspense} from "react";
import {LoaderPages} from "@/widgets/LoaderPages";

const App = () => {
    return (
        <Suspense fallback={<LoaderPages />}>
            <div className={classNames('app', {}, [])}>
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