import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
// import { Loader }  from 'components/Loader';
import { Header, Navigation, Link } from './SharedLayout.styled';

const SharedLayout = () => {
    return (
        <>
            <Header>
                <Navigation>
                    <Link to='/'>Home</Link>
                    <Link to='/movies'>Movies</Link>
                </Navigation>
            </Header>
            <Suspense fallback={<div>Loader ...</div>}>
                <Outlet />
            </Suspense>
        </>
    );
};

export default SharedLayout;