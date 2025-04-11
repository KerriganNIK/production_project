import classNames from "classnames";
import {useTheme} from "@/app/providers/ThemProvider";
import {AppRouter} from "@/app/providers/Router";
import {Navbar} from "@/widgets/Navbar/ui/Navbar";
import {Sidebar} from "@/widgets/Sidebar/ui/Sidebar";
import {Suspense, useState} from "react";
import {LoaderPages} from "@/widgets/LoaderPages";
import {Modal} from "@/shared/ui/Modal/Modal";

const App = () => {
    const {theme} = useTheme();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const openModal = () => {
        setIsOpen(prevState => !prevState);
    };

    return (
        <Suspense fallback={<LoaderPages />}>
            <div className={classNames('app', {}, [theme])}>
                <Modal
                    onClose={openModal}
                    isOpen={isOpen}
                >
                    TESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTEST
                </Modal>
                <button onClick={openModal}>open</button>
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