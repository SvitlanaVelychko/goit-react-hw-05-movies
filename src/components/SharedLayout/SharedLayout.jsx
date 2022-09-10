import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from "components/Loader/Loader";
import { Header, Navigation, Link } from './SharedLayout.styled';

const SharedLayout = () => {
    const location = useLocation();

    return (
        <>
            <Header>
                <Navigation>
                    <Link to='/' state={{from: location}}>Home</Link>
                    <Link to='/movies' state={{from: location}}>Movies</Link>
                </Navigation>
            </Header>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </>
    );
};

export default SharedLayout;