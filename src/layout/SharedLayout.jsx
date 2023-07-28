import { Suspense } from 'react';
import { Outlet } from "react-router-dom";
import Header from 'components/Header/Header'

const SharedLayout = ({ children }) => {
    return (
        <div className="container">
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
            {children}
        </div>
    )
}

export default SharedLayout;