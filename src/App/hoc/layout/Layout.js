import React from 'react';

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Loader from '../../components/loader/Loader';

const Layout = (props) => (
    <>
        <Header />

        <div className="main">
            <div className="container">
                {props.children}
            </div>
        </div>

        <Footer />

        <Loader />
    </>
);

export default Layout;