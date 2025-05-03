import classNames from "classnames";
import { AppRouter } from "@/app/providers/Router";
import { Navbar } from "@/widgets/Navbar/ui/Navbar";
import { Sidebar } from "@/widgets/Sidebar/ui/Sidebar";
import { Suspense, useEffect } from "react";
import { LoaderPages } from "@/widgets/LoaderPages";
import { useDispatch } from "react-redux";
import { userActions } from "@/enitites/User";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

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