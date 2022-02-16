import React, {ReactNode} from 'react';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
    children: ReactNode
}


const Layout = ({children}: LayoutProps) => (
    <>
        <Header/>
        {children}
        <Footer/>
    </>
);

export default Layout;