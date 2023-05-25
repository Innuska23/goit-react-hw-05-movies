import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';


function Layout() {
    return (
        <>
            <Header />
            <main>
                <Suspense fallback={<Loader/>}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    );
}

export default Layout;