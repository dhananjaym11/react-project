import React from 'react';

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const Layout = (props) => (
    <>
        <Header />

        <div className="main">
            <div className="container">
                {props.children}
            </div>
        </div>

        <Footer />
    </>
);

export default Layout;