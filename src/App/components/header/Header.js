import React from 'react';
import { Link } from "react-router-dom";

import './Header.scss';

const Header = () => (
    <header className="app-header">
        <Link to="/" className="app-logo">
            <span>Logo</span>
        </Link>

        <div className="float-right">
            <ul className="header-links clearfix">
                <li>
                    <Link to="/contacts">
                        <span>Contacts</span>
                    </Link>
                </li>
            </ul>
        </div>
    </header>
);

export default Header;