import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Box } from 'components/Box';
import { Loader } from 'components/Loader';
import { Link } from './SharedLayout.styled';

const SharedLayout = () => {
    return (
        <Box>
            <header>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/movies'>Movies</Link>
                </nav>
            </header>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </Box>
    );
};

export default SharedLayout;